import { useState } from "react";
import Article from "../Article/Article";
import "./BlockArticle.css";
import ButtonBlock from "../ButtonBlock/ButtonBlock";

export default function BlockArticle() {
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState("View all");

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks % 2 === 0) {
      setButtonText("Hide");
    } else {
      setButtonText("View all");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "70px", overflow: "hidden" }}>
      <div className="blockArticle">
        <Article
          ImageUrl={"src/assets/ArticlePictureOne.png"}
          TitleArticle={"Disease detection, check up in the laboratory"}
          DescriptionArticle={
            "In this case, the role of the health laboratory is very important to do a disease detection..."
          }
          ButtonMore={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
              Read more
              <img src="src/assets/Right.svg" style={{ width: "14px", height: "9px" }} />
            </div>
          }
        />
        <Article
          ImageUrl={"src/assets/ArticlePictureTwo.png"}
          TitleArticle={"Herbal medicines that are safe for consumption"}
          DescriptionArticle={
            "Herbal medicine is very widely used at this time because of its very good for your health..."
          }
          ButtonMore={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
              Read more
              <img src="src/assets/Right.svg" style={{ width: "14px", height: "9px" }} />
            </div>
          }
        />
        <Article
          ImageUrl={"src/assets/ArticlePictureThree.png"}
          TitleArticle={"Natural care for healthy facial skin"}
          DescriptionArticle={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
          ButtonMore={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
              Read more
              <img src="src/assets/Right.svg" style={{ width: "14px", height: "9px" }} />
            </div>
          }
        />
        {clicks % 2 === 1 && (
          <>
            <Article
              ImageUrl={"src/assets/ArticlePictureOne.png"}
              TitleArticle={"Natural care for healthy facial skin"}
              DescriptionArticle={
                "A healthy lifestyle should start from now and also for your skin health. There are some..."
              }
              ButtonMore={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
                  Read more
                  <img src="src/assets/Right.svg" style={{ width: "14px", height: "9px" }} />
                </div>
              }
            />
            <Article
              ImageUrl={"src/assets/ArticlePictureTwo.png"}
              TitleArticle={"Natural care for healthy facial skin"}
              DescriptionArticle={
                "A healthy lifestyle should start from now and also for your skin health. There are some..."
              }
              ButtonMore={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
                  Read more
                  <img src="src/assets/images/Arrowright.svg" style={{ width: "14px", height: "9px" }} />
                </div>
              }
            />
            <Article
              ImageUrl={"src/assets/ArticlePictureThree.png"}
              TitleArticle={"Natural care for healthy facial skin"}
              DescriptionArticle={
                "A healthy lifestyle should start from now and also for your skin health. There are some..."
              }
              ButtonMore={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "15%" }}>
                  Read more
                  <img src="src/assets/Right.svg" style={{ width: "14px", height: "9px" }} />
                </div>
              }
            />
          </>
        )}
      </div>
      <ButtonBlock buttontext={buttonText} onClick={handleClick} />
    </div>
  );
}
