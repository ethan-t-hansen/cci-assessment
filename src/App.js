import ImageScroller from './components/ImageScroller';
import CacheImage from './components/Image';
import './App.css';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  }
})

function App() {
  return (
    <div className="app">
      <h1> Ethan Hansen - CCI Tech Assessment </h1>
      <ImageScroller/>
      <div className="spacer"/>
    </div>
  );
}

export default App;
