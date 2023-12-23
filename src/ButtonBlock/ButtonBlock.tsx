import "./ButtonBlock.css";

interface IProps {
  className?: string;
  buttontext: string;
  buttonIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function ButtonBlock(props: IProps) {
  return (
    <div className={`${props.className} buttonblock`} onClick={props.onClick}>
      <div className="buttontext">{props.buttontext}</div>
      {props.buttonIcon ? <div className="buttonIcon">{props.buttonIcon}</div> : null}
    </div>
  );
}
