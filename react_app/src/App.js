import "./App.css";
import "./Button.css";
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
        <table border={2}>
          <tr>
            <img id="photo1" class="photo"/>
          </tr>
          <tr>
            <img id="photo2" class="photo"/>
          </tr>
        </table>
        {/* <PictureComponent /> */}
      </div>
      <VideoComponent />
      <div>
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
}

export default App;
