import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../App.css";
import "./Publish.css";

const Publish = props => {
  const [title, setTitle] = useState("Maillot Houston Rocket");
  const [description, setDescription] = useState("Neuf");
  const [price, setPrice] = useState(75);
  const [file, setFile] = useState("");

  const token = Cookies.get("token");

  const publishData = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("files", file);

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );

      alert("Annonce publiée " + JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(err.response.data.msg);
      }
    }
  };

  return (
    <div className="container flex-Col">
      <div>
        <h2>Déposer une annonce </h2>
      </div>

      <form
        className="formPublish flex-Col-jstart h-650"
        onSubmit={event => {
          console.log("formPublish");
          publishData();
          event.preventDefault();
        }}
      >
        <label className="flex-Col">
          Titre de l'annonce *
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label className="flex-Col">
          Texte de l'annonce *
          <textarea
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </label>
        <label className="flex-Col">
          Prix *
          <input
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </label>
        <label className="flex-Col">
          Photo *
          <input
            type="file"
            onChange={event => setFile(event.target.files[0])}
          />
        </label>

        <input className="publishBtn" type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Publish;
