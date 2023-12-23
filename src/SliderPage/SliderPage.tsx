import "./SliderPage.css";

interface IProps {
  sliderPageTitle: string;
  sliderPageText: string;
  sliderPageName: string;
  sliderPageSub: string;
  Avatar: string;
}

export default function SliderPage(props: IProps) {
  return (
    <div className="sliderPage">
      <div className="pointsTopPage" />
      <div className="sliderPageBackground">
        <div className="sliderPageContainer">
          <div className="sliderPageTextBox">
            <span className="sliderPageTitle">{props.sliderPageTitle}</span>
            <div className="sliderPageDivider" />
            <span className="sliderPageText">{props.sliderPageText}</span>
            <span className="sliderPageName">{props.sliderPageName}</span>s
            <span className="sliderPageSub">{props.sliderPageSub}</span>
          </div>
          <div className="Circle" />
          <div className="Avatar" style={{ backgroundImage: `url(${props.Avatar})` }} />
        </div>
      </div>
      <div className="pointsBackPage" />
    </div>
  );
}
