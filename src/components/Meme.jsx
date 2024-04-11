import React from "react";
import memesData from "../components/MemesData.jsx";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    if (meme.topText === "" && meme.bottomText === "") {
      document.querySelector(".error").textContent =
        "Please enter text in at least one of the input boxes";
      return;
    }
    document.querySelector(".error").textContent = "";
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

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
        <div>
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
        </div>
        <div>
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
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <p className="error"></p>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

// do some error handling in the code
