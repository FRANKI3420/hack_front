import { React, useState, useEffect } from "react";

export const VideoComponent = () => {
  let width = (window.innerWidth / 3) * 2; //get the window width
  let height = 0; //this will be computed based on the input stream
  let streaming = false; //streaming reference
  let video = null; //video reference
  let canvas = null; //canvas referance
  let photo = null; //photo referance
  let device = null;

  useEffect(() => {
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    device = document.getElementById("device");
    console.log(video);
    if (isSmartPhone()) {
      device.innerText = "Smart Phone";
    } else {
      device.innerText = "PC";
    }

    //this event is fired when the video can ready to stream.(a.k.a: video can play)
    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          width = window.innerWidth; //get window width
          height = video.videoHeight / (video.videoWidth / width);
          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );

    //this event is fired when the file uploaded.(a.k.a: file change)
    clearPhoto();
  });

  async function cameraOn() {
    let stream = null; //variable to preserve the video result.
    let constraints = null;
    if (isSmartPhone()) {
      // setting constraints
      constraints = {
        audio: false,
        video: {
          facingMode: "user",
        },
      };
    } else {
      constraints = {
        audio: false,
        video: true, // this code is too short. should be more detailed.
      };
    }
    // get the references.
    const video = document.getElementById("video");
    // get UserMedia status and stream from camera, and play video.
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
      video.play();
    } catch (err) {
      console.log(err);
    }
  }

  function takePicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
      document.getElementById("canvas").style.display = "none";
    } else {
      clearPhoto();
    }
  }

  function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true;
    } else {
      return false;
    }
  }

  function clearPhoto() {
    if (canvas) {
      const context = canvas.getContext("2d");
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    }
  }

  return (
    <>
      <h2
        className="alert alert-info my-3 container-fluid text-center"
        role="alert"
      >
        Camera Test
      </h2>
      <div className="d-flex p-2 justify-content-around align-items-center">
        <div>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={cameraOn}
          >
            Camera On
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={takePicture}
            Take
            picture
          >
            take picture
          </button>
          <div className="my-2">
            state：<span id="status"></span>---device：<span id="device"></span>
          </div>
        </div>
      </div>
    </>
  );
};
