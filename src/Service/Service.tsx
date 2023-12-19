import "./Service.css";

interface IProps {
  ServiceImage: string;
  ServiceTitle: string;
  ServiceDescription: string;
}

export default function Service(props: IProps) {
  return (
    <div className="service">
      <div className="serviceImage" style={{ backgroundImage: `url(${props.ServiceImage})` }} />
      <span className="serviceTitle">{props.ServiceTitle}</span>
      <span className="serviceDescription">{props.ServiceDescription}</span>
    </div>
  );
}
