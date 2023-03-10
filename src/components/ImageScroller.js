// Fetch data from
import React, { useCallback, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

function ImageScroller() {
  const [images, setImages] = useState();

  const shuffleImage = useCallback(() => {
    // recursively shuffle images in current list
  })

  const getImage = useCallback(() => {
    console.log("line 15");

    let imageUrlList = [];
    
    fetch(url)
      .then((res) => res.json())
      .then((images) => {
        console.log("Images: ", images);

        for (let i = 0; i < 20; i++) {
          var currimg = {
            key: images[i].id,
            title: images[i].title,
            uri: images[i].url
          }
          imageUrlList.push(currimg);
        }

        setImages(imageUrlList);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [setImages]);

  useEffect(() => {
    console.log("line 36");
    getImage();
  }, [getImage]);

  return (
    <>
      <div className='container'>
        {images ? (
          images.map((imageData) => 
          <div className="img-container">
            <img src={imageData.uri} title={imageData.title} />
            <h1 class="overlay-text">{imageData.title}</h1>
          </div>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button onClick={shuffleImage}>Refresh</button>
    </>
  );
}

export default ImageScroller;