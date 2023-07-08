import "./App.css";
import { Greet } from "./component/sample";
import { VideoComponent } from "./component/video";

function App() {
  return (
    <div className="App">
      <div>
        <video id="video" autoPlay muted playsInline></video>
      </div>
      <div>
        <canvas id="canvas"></canvas>
      </div>
      <div>
        <img id="photo" alt="The screen caputure will appear in this box." />
      </div>
      <VideoComponent />
      <Greet />
    </div>
  );
}

export default App;
