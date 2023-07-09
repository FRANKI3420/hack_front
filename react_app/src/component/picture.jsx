import React, { useEffect } from "react";
import "../style/picture.css";
import AWS from "aws-sdk";

export const PictureComponent = () => {
  console.log("pic");
  var albumBucketName = "kokushimusou";
  var bucketRegion = "ap-northeast-1";
  var IdentityPoolId = "ap-northeast-1:27df68ca-3e55-4ff2-8ad5-01216bfbb9c6";

  AWS.config.region = bucketRegion; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  });

  var s3 = new AWS.S3();

  // 画像データを取り込む関数
  function fetchImageFromS3_1(bucketName, imageName) {
    const params = {
      Bucket: bucketName,
      Key: imageName,
    };

    s3.getObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // ここで取得した画像データを処理します
        const imageData = data.Body;
        const uint8Array = new Uint8Array(imageData);
        const binary = String.fromCharCode.apply(null, uint8Array);
        const base64 = btoa(binary);
        const dataURL = `data:image/jpeg;base64,${base64}`;
        console.log("data", dataURL);
        if (imageName === "similar.png") {
          const imgElement = document.getElementById("target_img");
          if (imgElement) {
            imgElement.src = dataURL;
          }
        } else if (imageName === "cropped.png") {
          const imgElement = document.getElementById("cropped_img");
          if (imgElement) {
            imgElement.src = dataURL;
          }
        }
      }
    });
  }

  // 画像データの取得を実行する

  function handleClick() {
    fetchImageFromS3_1(albumBucketName, "similar.png");
    fetchImageFromS3_1(albumBucketName, "cropped.png");
  }
  return (
    <>
      <h2>Look Alikes !!</h2>
      <div className="name-area">
        <div id="cropped_name">切り取った顔</div>
        <div id="target_name">名前</div>
      </div>
      <div className="img-area">
        <div>
          <img id="cropped_img" alt="kari1" />
        </div>
        <div>
          <img id="target_img" alt="kari2" />
        </div>
      </div>
      <div className="gptText-area">あいうえお</div>
      <div className="updata-area">
        <button onClick={handleClick}>更新</button>
      </div>
    </>
  );
};
