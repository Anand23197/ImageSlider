import "./App.css";
import ImageSlider from "./components/ImageSlider";
import nine from "./images/19.jpeg";
import bird from "./images/bird.jpg";
import camera from "./images/camera.jpg";
import flower from "./images/flower.PNG";
import pond from "./images/pond.jpg";
import tree from "./images/tree.jpg";

const images = [nine, bird, camera, flower, pond, tree];
function App() {
  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
