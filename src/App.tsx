import { useState } from "react";
import Logo from "./Logo/Logo";
import TopNavigation from "./TopNavigation/TopNavigation";
import Points from "./Points/Points";
import HeaderPicture from "./HeaderPicture/HeaderPicture";
import HeaderText from "./HeaderText/HeaderText";
import CentralHeaderBlock from "./CentralHeaderBlock/CentralHeaderBlock";
import BackgroundElement from "./BackgroundElement/BackgroundElement";
import Services from "./BlockServices/BlockServices";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import LeftHeaderBlock from "./LeftHeaderBlock/LeftHeaderBlock";
import Slider from "./Slider/Slider";
import BlockArticle from "./BlockArticle/BlockArticle";
import Footer from "./Footer/Footer";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "70px", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "2%",
          marginLeft: "10%",
          marginRight: "10%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "none" }}>
          <Logo />
        </div>
        <TopNavigation />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginLeft: "10%",
          marginRight: "10%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ position: "absolute", left: "-50px" }}>
          <Points />
        </div>
        <div style={{ flex: "none", marginTop: "9%", marginBottom: "50px" }}>
          <HeaderText />
        </div>
        <div style={{ flex: "none" }}>
          <HeaderPicture Width="693px" Height="598px" ImageUrl="src/assets/HeaderPicture.png" />
        </div>
      </div>
      <div style={{ justifyContent: "center", marginTop: "-10%" }}>
        <CentralHeaderBlock
          Title="Our Services"
          Description="We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Services />
      </div>
      <div style={{ position: "absolute", top: 1000, marginLeft: -10, overflow: "hidden" }}>
        <BackgroundElement />
      </div>
      <div style={{ position: "absolute", top: 1407, right: 265, zIndex: -1 }}>
        <Points />
      </div>
      <ButtonBlock buttontext={"Learn more"} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginLeft: "10%",
          marginRight: "15%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "none" }}>
          <HeaderPicture Width="650px" Height="477px" ImageUrl="src/assets/HeaderPictureTwo.png" />
        </div>
        <div style={{ flex: "none", marginTop: "5%" }}>
          <LeftHeaderBlock
            Title={"Leading healthcare providers"}
            Description={
              "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
            }
            btntext={"Learn more"}
          />
        </div>
        <div style={{ position: "absolute", right: "9%", marginTop: "27%", overflow: "fixed" }}>
          <Points />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginLeft: "15%",
          marginRight: "10%",
          marginTop: "-10%",
          marginBottom: "-10%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "none", marginTop: "5%" }}>
          <LeftHeaderBlock
            Title={"Download our mobile apps"}
            Description={
              "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
            }
            btntext="Download"
            buttonIcon={<img src="src/assets/Vector.svg" />}
          />
        </div>

        <div style={{ flex: "none" }}>
          <HeaderPicture Width="665px" Height="434px" ImageUrl="src/assets/HeaderPictureThree.png" />
        </div>
      </div>
      <Slider />
      <div>
        <CentralHeaderBlock Title="Check out our latest article" Description="" />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "-50px",
        }}
      >
        <div style={{ position: "absolute", top: "-8%", left: "1%" }}>
          <Points />
        </div>
        <BlockArticle />
        <div
          style={{
            position: "absolute",
            top: "-16%",
            transform: "rotateX(180deg) rotateY(180deg)",
            right: "-20%",
            zIndex: -1,
          }}
        >
          <BackgroundElement />
        </div>
      </div>
      <Footer />
    </div>
  );
}
