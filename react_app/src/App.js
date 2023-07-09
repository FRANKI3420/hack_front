import "./App.css";
import "./Button.css";
import { Greet } from "./component/sample";
import { VideoComponent } from "./component/video";
import { PictureComponent } from "./component/picture";

function App() {
  return (
    <div className="App">
      <div id="picture">
        <div className="block1">
          <div>
            <video id="video" autoPlay muted playsInline></video>
          </div>
          <div>
            <canvas id="canvas"></canvas>
          </div>
          <VideoComponent />
        </div>
        <div className="block2">
          <PictureComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
