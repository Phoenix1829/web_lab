import { useState } from "react";
import Logo from "./Logo/Logo";
import TopNavigation from "./TopNavigation/TopNavigation";
import Points from "./Points/Points";
import HeaderPicture from "./HeaderPicture/HeaderPicture";
import HeaderText from "./HeaderText/HeaderText";
import BlockHeader from "./BlockHeader/BlockHeader";
import BackgroundElement from "./BackgroundElement/BackgroundElement";
import Services from "./BlockServices/BlockServices";

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
        <div style={{ position: "absolute", left: "-40px" }}>
          <Points />
        </div>
        <div style={{ flex: "none", marginTop: "10%", marginBottom: "50px" }}>
          <HeaderText />
        </div>
        <div style={{ flex: "none" }}>
          <HeaderPicture Width="693px" Height="598px" ImageUrl="src/assets/HeaderPicture.png" />
        </div>
      </div>
      <div style={{ justifyContent: "center", marginTop: "-9%" }}>
        <BlockHeader
          Title="Our Services"
          Description="We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: "10%",
            marginRight: "10%",
            paddingTop: "80px",
          }}
        >
          <Services />
        </div>
        <div style={{ position: "absolute", top: 965, overflow: "hidden" }}>
          <BackgroundElement />
        </div>
        <div style={{ position: "absolute", top: 1445, right: 250, zIndex: -1 }}>
          <Points />
        </div>
      </div>
    </div>
  );
}
