import React from "react";
import "../style/picture.css";

export const PictureComponent = () => {
  let crop = document.getElementById("cropped_img");
  let target = document.getElementById("target_img");

  const cropped_src =
    "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088825274/1200/9784088825274.jpg";
  const target_img_scr =
    "https://cdn-ak-img.shonenjumpplus.com/public/series-thumbnail/10834108156650024830-239012e525e9a5d948ac9faa08335c8e?1688674167";

  return (
    <>
      <h2>Look Aliles !!</h2>
      <div className="img-area">
        <div>
          <img id="cropped_img" alt="kari1" src={cropped_src} />
        </div>
        <div>
          <img id="target_img" alt="kari2" src={target_img_scr} />
        </div>
      </div>
    </>
  );
};
