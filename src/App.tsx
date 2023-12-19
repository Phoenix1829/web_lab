import { useState } from "react";
import Logo from "./Logo/logo";
import TopNavigation from "./TopNavigation/topNavigation";
import Points from "./Points/points";
import HeaderPicture from "./HeaderPicture/headerPicture";
import HeaderText from "./HeaderText/headerText";

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
        <div style={{ position: "absolute", left: "-20px" }}>
          <Points />
        </div>
        <div style={{ flex: "none", marginTop: "9%", marginBottom: "50px" }}>
          <HeaderText />
        </div>
        <div style={{ flex: "none" }}>
          <HeaderPicture Width="693px" Height="598px" ImageUrl="src/assets/HeaderPicture.png" />
        </div>
      </div>
    </div>
  );
}
