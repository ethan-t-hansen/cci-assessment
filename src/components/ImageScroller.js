import Image from './Image';
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

function ImageScroller() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch images from url, place them in "images"
  const getImages = () => {

    fetch(url)

      // if response is ok, pass to next, otherwise throw error
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })

      // set images state to fetched json data
      .then((imageData) => {
        setImages(imageData);  
      })

      // catch any error thrown by the first block and display an error message
      .catch((error) => {
        console.error("Error fetching image data: ", error);
      })

      // set loading state to false
      .finally(() => {
        setLoading(false);
      });

  }

  // makes a copy of the current state of images, shuffles it, and sets the state to the shuffled list
  const shuffleImages = () => {
    let tempList = [...images];
    setImages(shuffled(tempList));
  }

  // shuffles a list recursively
  function shuffled(list) {

    // base case, returns the sole element in the list
    if (list.length <= 1) {
      return list;
    }
  
    // randomly selects an index in list and removes the element at that index
    const randomIndex = Math.floor(Math.random() * list.length);
    const [randomElement] = list.splice(randomIndex, 1);
  
    // the result of the recursive call, which should be a randomly shuffled list
    const shuffledList = shuffled(list);
  
    // inserts the previously removed element into the shuffled list at a random index
    const insertIndex = Math.floor(Math.random() * shuffledList.length);
    shuffledList.splice(insertIndex, 0, randomElement);
  
    return shuffledList;

  }

  // retrieve images from json
  useEffect(() => {
    getImages();
  }, []);

  // Loading mesage while data is being loaded, then render image list
  if (loading) {
    return (
      <div>
        Fetching Image Data...
      </div>
    );
  } else {
    return (
      <>
        <div className='container'>
          {images ? (
            images.map((imageData) => <Image src={imageData.url} title={imageData.title}/>)
          ) : (<div/>)}
        </div>
        <button className="button" onClick={shuffleImages}>Shuffle</button>
      </>
    );
  } 
}

export default ImageScroller;