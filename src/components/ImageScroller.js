import Image from './Image';
import React, { useCallback, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

function ImageScroller() {

  const [images, setImages] = useState([]); 

  const getImage = useCallback(() => {
    
    let imageList = [];

    fetch(url)
      .then((res) => res.json())
      .then((images) => {
        console.log("Images: ", images);

        for (let i = 0; i < images.length; i++) {
          var currimg = {
            key: images[i].id,
            title: images[i].title,
            uri: images[i].url
          }
          imageList.push(currimg);
        }

        let newList = shuffleImages(imageList);

        setImages(newList);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  function shuffleImages(list) {
    // Base case: if the list has only one item, return it
    if (list.length === 1) {
      return list;
    }
  
    // Recursive case: randomly select an item from the list and remove it
    const randomIndex = Math.floor(Math.random() * list.length);
    const [randomItem] = list.splice(randomIndex, 1);
  
    // Recursively shuffle the remaining items in the list
    const shuffledList = shuffleImages(list);
  
    // Insert the randomly selected item at a random index in the shuffled list
    const insertIndex = Math.floor(Math.random() * shuffledList.length);
    shuffledList.splice(insertIndex, 0, randomItem);
  
    return shuffledList;
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <div className='container'>
        {images ? (
          images.map((imageData) => 
          <div className="img-container">
            <Image src={imageData.uri} title={imageData.title}/>
            <h1 class="overlay-text">{imageData.title}</h1>
          </div>)
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
      <button onClick={getImage}>Refresh</button>
    </>
  );
}

export default ImageScroller;