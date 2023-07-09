import React from "react";

export const PictureComponent = () => {
  let crop = document.getElementById("cropped_img");
  let target = document.getElementById("target_img");

  const cropped_src = "";
  const target_img_scr = "";

  return (
    <>
      <h3>Look</h3>
      <div>
        <img id="cropped_img" alt="kari1" src={cropped_src} />
      </div>
      <div>
        <img id="target_img" alt="kari2" src={target_img_scr} />
      </div>
    </>
  );
};
