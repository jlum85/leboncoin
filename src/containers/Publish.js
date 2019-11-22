import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../App.css";
import "./Publish.css";

// import Dropzone from "react-dropzone";
// import { useDropzone } from "react-dropzone";

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: "border-box"
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden"
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
//   objectFit: "contain"
// };

const Publish = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState("");
  const [isError, setIsError] = useState(false);
  const [msgError, setMsgError] = useState("error");
  const token = Cookies.get("token");

  //  *********  pour le drag & drop ***********
  // const [files, setFiles] = useState([]);
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop: acceptedFiles => {
  //     setFiles(
  //       acceptedFiles.map(file =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file)
  //         })
  //       )
  //     );
  //   }
  // });

  // const thumbs = files.map(file => (
  //   <div style={thumb} key={file.name}>
  //     <div style={thumbInner}>
  //       <img src={file.preview} style={img} />
  //     </div>
  //   </div>
  // ));

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );
  //  *********  pour le drag & drop ***********

  const setError = msgErr => {
    setMsgError(msgErr);
    setIsError(true);
  };

  const checkParams = () => {
    let result = false;
    if (!token) {
      setError("Vous devez vous connecter pour publier");
    } else if (!title) {
      setError("Titre non renseigné");
    } else if (!description) {
      setError("Texte non alimenté");
    } else if (!price || price <= 0) {
      setError("Prix incorrect");
    } else if (!file) {
      setError("Vous devez ajouter une photo");
    } else {
      setMsgError("");
      setIsError(false);
      result = true;
    }
    // console.log(result, isError, msgError);
    return result;
  };

  const publishData = async () => {
    if (checkParams()) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("files", file);

      try {
        const response = await axios.post(
          // "https://leboncoin-api.herokuapp.com/api/offer/publish",
          "http://localhost:4000/offer/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        );

        alert("Annonce publiée " + JSON.stringify(response.data));
      } catch (err) {
        console.log(err);
        // if (err.response.status === 500) {
        //   console.error("An error occurred");
        // } else {
        //   console.error(err.response.data.msg);
        // }
      }
    }
  };

  return (
    <section className="container-w400 flexPublish">
      <div className="title">
        <h2>Déposer une annonce </h2>
      </div>

      <form
        className="formPublish flex-Col-start"
        onSubmit={event => {
          // console.log("formPublish");
          publishData();
          event.preventDefault();
        }}
      >
        <label className="flex-Col-start">
          Titre de l'annonce *
          <input
            className="inputTitle"
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label className="flex-Col-start">
          Texte de l'annonce *
          <textarea
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </label>
        <label className="flex-Col-start">
          Prix *
          <input
            className="inputPrice"
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </label>
        <label className="flex-Col-start">
          Photo *
          <input
            className="inputPhoto"
            type="file"
            multiple
            onChange={event => {
              // console.log(event.target.files);
              setFile(event.target.files[0]);
            }}
          />
        </label>

        {/* <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </section> */}

        <input className="publishBtn" type="submit" value="Valider" />
        <p className={"error " + (isError ? "error-show" : "error-hide")}>
          {msgError}
        </p>
      </form>
    </section>
  );
};

export default Publish;
