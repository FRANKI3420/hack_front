import { React, useState, useEffect } from "react";
import "./App.css";
import "./Button.css";
import { Greet } from "./component/sample";
import { VideoComponent } from "./component/video";
import { PictureComponent } from "./component/picture";

function App() {
  const [isView, setIsView] = useState(true);

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
          <VideoComponent setIsView={setIsView} />
        </div>
        {isView && (
          <div className="block2">
            <PictureComponent />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
