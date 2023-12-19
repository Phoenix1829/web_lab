import "./BlockHeader.css";

interface IProps {
  Title: string;
  Description: any;
}

export default function BlockHeader(props: IProps) {
  return (
    <div className="block-header">
      <span className="title">{props.Title}</span>
      <div className="divider" />
      <span className="description">{props.Description}</span>
    </div>
  );
}
