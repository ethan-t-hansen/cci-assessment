import ImageScroller from './components/ImageScroller';
import CacheImage from './components/Image';
import './App.css';
import {View, Image, StyleSheet} from 'react-native';

function App() {
  return (
    <div className="app">
      <h1> Ethan Hansen </h1>
      <h2> Convergence - Front-end Assessment</h2>
      <ImageScroller/>
      <div className="spacer"/>
    </div>
  );
}

export default App;
