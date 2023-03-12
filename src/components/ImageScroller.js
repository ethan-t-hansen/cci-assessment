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

      // map json data to a list of data that can be turned into images
      .then((images) => {
        let tempList = images.map(image => ({
            src: image.url,
            title: image.title
        }));
        setImages(tempList);  
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

  // copies "images" array, shuffles it, and passes it into the setImage function
  const shuffleImages = () => {
    let tempList = [...images];
    setImages(shuffled(tempList));
  }

  // shuffles a list recursively
  function shuffled(list) {

    // base case, returns the sole element in the list
    if (list.length === 1) {
      return list;
    }
  
    // randomly selects an item from the list and removes it
    const randomIndex = Math.floor(Math.random() * list.length);
    const [randomElement] = list.splice(randomIndex, 1);
  
    // recursively shuffles the remaining items in the list
    const shuffledList = shuffled(list);
  
    // inserts the randomly selected item at a random index in the shuffled list
    const insertIndex = Math.floor(Math.random() * shuffledList.length);
    shuffledList.splice(insertIndex, 0, randomElement);
  
    return shuffledList;

  }

  // retrieves images from json once
  useEffect(() => {
    getImages();
  }, []);

  // Return "loading" while data is being loaded
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return (
      <>
        <div className='container'>
          {images ? (
            images.map((imageData) => 
              <Image src={imageData.src} title={imageData.title}/>
            )
          ) : (
            <div>
            </div>
          )}
        </div>
        <button className="button" onClick={shuffleImages}>Refresh</button>
      </>
    );
  }
}

export default ImageScroller;