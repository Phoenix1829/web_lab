import "./HeaderPicture.css";

interface IProps {
  Width: string;
  Height: string;
  ImageUrl: string;
}

export default function HeaderPicture(props: IProps) {
  const style = {
    maxWidth: props.Width,
    maxHeight: props.Height,
    width: "41vw",
    height: "35vw",
    minWidth: "350px",
    minHeight: "300px",
    backgroundImage: `url('${props.ImageUrl}')`,
  };

  return <div className="header-picture" style={style} />;
}
