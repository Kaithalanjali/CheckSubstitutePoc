import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import leftArrow from "../assets/leftarrow.svg";
import rightArrow from "../assets/rightarrow.svg";
import SubstituteCard from "./SubstituteCard";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

const SimpleSlider = () => {
  const [slidesToDisplay, setSlidesToDisplay] = useState(2);
  const [freezeIndex, setFreezeIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [freezeChecked, setFreezeChecked] = useState(false);
  const [width, setWidth] = useState(800);
  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    console.log(freezeIndex);
    console.log(checked, freezeIndex);
    if (checked) {
      setFreezeChecked(true);
      setSlidesToDisplay(1);
      sliderRef.slickGoTo(0, true);
      setWidth(400);
      setFreezeIndex(currentIndex); // Freeze the first card if checked, otherwise unfreeze
      setDataToRender(dataToRender.slice(currentIndex + 1));
    } else {
      setDataToRender(realList);
      setFreezeChecked(false);
      setSlidesToDisplay(2);
      setWidth(800);
      sliderRef.slickGoTo(freezeIndex, true);
      setFreezeIndex(0)
      setCurrentIndex(freezeIndex);
    }
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const realList = [
    <SubstituteCard slide={1} />,
    <SubstituteCard slide={2} />,
    <SubstituteCard slide={3} />,
    <SubstituteCard slide={4} />,
    <SubstituteCard slide={5} />,
    <SubstituteCard slide={6} />,
  ];
  const [dataToRender, setDataToRender] = useState(realList);

  const settings = {
    // initialSlide: 0,
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: slidesToDisplay,
    slidesToScroll: 1,
    swipeToSlide: true,
   
    afterChange: function (index: number) {
      setCurrentIndex(index);
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <div style={{ display: "flex", width: "1200px" }}>
        <SubstituteCard slide={0} />

        <div
          style={{
            width: "1px",
            height: "680px",
            margin: "4px",
            background: " #DFE1E5",
          }}
        ></div>

        {freezeChecked && (
          <div
            style={{
              display: "inline-block",
              width: "400px",
              height: "670px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {/* {" "} */}
            <SubstituteCard slide={freezeIndex + 1}/>
            {/* {" "} */}
          </div>
        )}
        <div style={{ display: "inline-block", width: width }}>
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {dataToRender}
          </Slider>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Freeze
        </label>
        <span style={{ padding: "12px" }}>
          {" "}
          <img src={rightArrow} alt="" onClick={previous} />
        </span>
        <span style={{ padding: "12px" }}>
          {" "}
          <img src={leftArrow} alt="" onClick={next} />
        </span>
      </div>
    </>
  );
};

export default SimpleSlider;
