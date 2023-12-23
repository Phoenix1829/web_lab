import "./CentralHeaderBlock.css";

interface IProps {
  Title: string;
  Description: string;
}

export default function CentralHeaderBlock(props: IProps) {
  return (
    <div className="centralheader">
      <span className="title">{props.Title}</span>
      <div className="divider" />
      <span className="description">{props.Description}</span>
    </div>
  );
}
