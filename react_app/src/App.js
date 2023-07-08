import "./App.css";
import { Greet } from "./component/sample";
import { VideoComponent } from "./component/video";
import { PictureComponent } from "./component/picture";

function App() {
  return (
    <div className="App">
      <div id="picture">
        <div>
          <video id="video" autoPlay muted playsInline></video>
        </div>
        <div>
          <canvas id="canvas"></canvas>
        </div>
        <div>
          <img id="photo" alt="The screen caputure will appear in this box." />
        </div>
        <PictureComponent />
      </div>
      <VideoComponent />
    </div>
  );
}

export default App;
