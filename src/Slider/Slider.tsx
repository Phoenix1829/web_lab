import { useState } from "react";
import SliderPage from "../SliderPage/SliderPage";
import "./Slider.css";

interface SliderPage {
  sliderPageTitle: string;
  sliderPageText: string;
  sliderPageName: string;
  sliderPageSub: string;
  Avatar: string;
}

const pages: SliderPage[] = [
  {
    sliderPageTitle: "What our customer are saying",
    sliderPageText:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    sliderPageName: "Edward Newgate",
    sliderPageSub: "Founder Circle",
    Avatar: "src/assets/Avatar.png",
  },
  {
    sliderPageTitle: "What our customer are saying",
    sliderPageText: "Cuteness overload",
    sliderPageName: "Cat",
    sliderPageSub: "I have paws",
    Avatar: "src/assets/NextAvatarOne.png",
  },
  {
    sliderPageTitle: "What our customer are saying",
    sliderPageText: "Cat",
    sliderPageName: "Meow",
    sliderPageSub: "I have paws",
    Avatar: "src/assets/NextAvatarTwo.png",
  },
  {
    sliderPageTitle: "What our customer are saying",
    sliderPageText: "Meow",
    sliderPageName: "Meow Meow",
    sliderPageSub: "I have paws",
    Avatar: "src/assets/NextAvatarThree.png",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const sliderImages = ["slider1", "slider2", "slider3", "slider4"];

  const nextSlide = () => {
    setIndex(index + 1);
    if (index > pages.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);
    if (index < 0) {
      setIndex(pages.length - 1);
    }
  };

  const currentImageClassName = sliderImages[index % sliderImages.length];

  return (
    <div className="Slider">
      <SliderPage {...pages[index]} />
      {index === 0 ? <div className="backOff" /> : <div className="backOn" onClick={prevSlide} />}
      {index === pages.length - 1 ? <div className="forwardOff" /> : <div className="forwardOn" onClick={nextSlide} />}

      <div className={currentImageClassName}></div>
    </div>
  );
}
