import "./style/background.css";
// import "animate.css";

// -----------Birds Img------------
import bird1 from "../../../assets/birds/bird1.svg";
import bird2 from "../../../assets/birds/bird2.svg";

// -----------Cloud IMG------------
import cloud1 from "../../../assets/cloud/cloud1.svg";
import cloud2 from "../../../assets/cloud/cloud2.svg";
import cloud3 from "../../../assets/cloud/cloud3.svg";

//------------Hand IMG--------------
import hand from "../../../assets/hand/hand.svg";

// ------------Home Img-------------
import chimney from "../../../assets/home/chimney.svg";
import wall1 from "../../../assets/home/wall-1.svg";
import wall2 from "../../../assets/home/wall-2.svg";
import roof1 from "../../../assets/home/roof.svg";
import roof2 from "../../../assets/home/roof-top.svg";
import roof3 from "../../../assets/home/backroof.svg";
import roof4 from "../../../assets/home/rooftop1.svg";
import gate from "../../../assets/home/gate.svg";
import frontw1 from "../../../assets/home/window1.svg";
import frontw2 from "../../../assets/home/window2.svg";
import frontw3 from "../../../assets/home/window3.svg";
import frontw4 from "../../../assets/home/window4.svg";
import frontw5 from "../../../assets/home/window5.svg";
import frontw6 from "../../../assets/home/window6.svg";

// ---------- Plant Img----------
import plant1 from "../../../assets/plant/plant1.svg";
import plant2 from "../../../assets/plant/plant2.svg";

//--------------Sun IMG-------------
import sun from "../../../assets/sun/sun.svg";
// import ray1 from "../../../assets/sun/ray1.svg";
// import ray2 from "../../../assets/sun/ray2.svg";
// import ray3 from "../../../assets/sun/ray3.svg";
// import ray4 from "../../../assets/sun/ray4.svg";
// import ray5 from "../../../assets/sun/ray5.svg";
// import sunrays from "../../../assets/sun/sun-rays.svg"

// ---------- Background Img----------
import bg1 from "../../../assets/background/grey.svg";
import bg2 from "../../../assets/background/black.svg";

const BottomImages = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
      document.body.classList.add("scrolled");
    }
  });
  return (
    <div className="-translate-y-[550px] translate-x-[17rem]">
      <div className="relative bottom-img ">
        <img src={bg2} alt="" className="bg-2" />
        <img src={bg1} alt="" className="bg-1" />

        {/* ---------- Birds Image ---------- */}
        <img src={bird1} alt="Home Img" className="bird-1" />
        <img src={bird2} alt="Home Img" className="bird-2" />

        {/* -----------Cloud Images---------- */}
        <img src={cloud1} alt="" className="cloud-1" />
        <img src={cloud2} alt="" className="cloud-2" />
        <img src={cloud3} alt="" className="cloud-3" />

        {/*----------Sun Image -------------- */}
        <img
          src={sun}
          alt="Home Img"
          className="sun-circle"
          style={{ strokeWidth: "10px" }}
        />

        {/* -----------Plant Imaages----------- */}
        <img src={plant1} alt="" className="plant-1" />
        <img src={plant2} alt="" className="plant-2" />

        {/* ----------Home Images------------ */}
        <img src={roof3} alt="" className="roof-3" />
        <img src={wall1} alt="" className="wall-1" />
        <img src={wall2} alt="" className="wall-2" />
        <img src={gate} alt="" className="gate" />
        <img src={frontw1} alt="" className="window-1" />
        <img src={frontw2} alt="" className="window-2" />
        <img src={frontw3} alt="" className="window-3" />
        <img src={frontw4} alt="" className="window-4" />
        <img src={frontw5} alt="" className="window-5" />
        <img src={frontw6} alt="" className="window-6" />
        <img src={roof1} alt="" className="roof-1" />
        <img src={roof4} alt="" className="roof-4" />
        <img src={roof2} alt="" className="roof-2" />
        <img src={chimney} alt="" className="chimney" />

        {/* -----------Hand Images----------- */}
        <img src={hand} alt="" className="hand" />
      </div>
    </div>
  );
};

export default BottomImages;
