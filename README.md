# **Convergence Front-end exercise: Reflections**

## How I approached the problem:

I took a top down approach, building functionality for smaller problems and integrating them with each other once they were all complete. This saved a lot of time when I had to diagnose issues with my code. Here are the steps I took:

Styling:
1. Style a horizontally scrolling container that places images side by side within it, and test it by wrapping a list of static images within it
2. Create an Image component that takes a url and title as it's props and renders an image
3. Style the image component with a border, drop shadow, rounded corners, and displaying the image's title diagonally across it
4. Style the shuffle button with a minimalistic design and hover effect

Fetching, Storing, and Returning:
1. Fetch json data, printing data to console to test and setting the load state to false once finished
2. Define a const to keep the json data, with a function that sets the value of the state through useState()
3. Map url and title from list of retrieved data to Image components, returning all of them placed side by side inside the scrolling container after the json data has been fetched

Shuffling:
1. Write an abstract recursive shuffle function that can take a list of elements of arbitrary type and reorder the list in a random order. Specifications are:
    1. In the base case (list len <= 1), return the list, otherwise take the result of the recursion
    2. Take a random index in the list, remove the element at that index and store it
    3. Take the result of a recursive call of the list (which should be a randomly shuffled list)
    4. Insert the previously removed element into a random place in the shuffled list and return the list
2. Integrate the shuffle function with the ImageScroller component by copying the current state into a new list, shuffling it, and setting the state to the shuffled list.
3. Place a button below the scroll container that calls the shuffleImages function on click.

## What I learned & Challenges:

- I got into the habit of with testing my code by using console.log() statements to check and see if certain lines of code were being called, and if certain variables had values that differ from my expectations. This simplified the debugging process a lot.
- I got very comfortable with JS functions, useState, and useEffect, which will enhance my productivity when building responsive front-end applications in the future
- I parsed through a large amount of documentation and tutorials pertaining to fetching data from APIs and caching images. The continuous process of learning new things, testing out potential implementations, and debugging is difficult and frustrating at times but also very rewarding and I'd like to think it makes me more resilient as a developer.

## **Thanks!**

\- Ethan






