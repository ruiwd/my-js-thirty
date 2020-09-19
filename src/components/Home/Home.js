import React, { useEffect } from "react";
import Polaroid from "./Polaroid.js";
import DrumKit from "../../projectAssets/home/polaroidDrumKit.png";

function Home() {
  useEffect(() => {
    const randomizeLabel = () => {
      document.querySelectorAll(".polaroid, .postIt").forEach((e) => {
        let randomNumber = Math.floor(Math.random() * 10);
        e.style.transform = `rotateZ(${randomNumber - 5}deg) 
        translateY(${randomNumber / 7}rem)`;
      });
    };

    randomizeLabel();
  });

  return (
    <div className="home">
      <div className="scrollDiv">
        <Polaroid
          project="DrumKit"
          imageSrc={DrumKit}
          description="Drums too hard to learn? Here's a shortcut!"
        />
        <Polaroid
          project="Clock"
          imageSrc={DrumKit}
          description="Just in case you needed another clock."
        />
      </div>
    </div>
  );
}

export default Home;
