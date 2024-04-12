import React, { useEffect } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  async function getMemeImage() {
    if (meme.topText === "" && meme.bottomText === "") {
      document.querySelector(".error").textContent =
        "Please enter text in at least one of the input boxes";
      return;
    }
    document.querySelector(".error").textContent = "";
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://random-meme-api.vercel.app/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result).data;
        setMeme((prevMeme) => ({
          ...prevMeme,
          randomImage: data.url,
        }));
      })
      .catch((error) => {
        document.querySelector(".error").textContent = error.message;
      });
  }

  useEffect(() => {
    getMemeImage();
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    document.querySelector(".error").textContent = "";
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="Shut up"
            className="form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="and take my money"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-primary form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <p className="error"></p>
      <div className="meme">
        <img
          src={meme.randomImage}
          className="meme-image"
          alt="Internet connection required"
        />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
