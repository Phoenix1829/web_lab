import "./LeftHeaderBlock.css";
import ButtonBlock from "../ButtonBlock/ButtonBlock";

interface IProps {
  Title: string;
  Description: string;
  btntext: string;
  buttonIcon?: React.ReactNode;
}

export default function LeftHeaderBlock({ Title, Description, btntext, buttonIcon }: IProps) {
  return (
    <div className="leftheader">
      <span className="lefttitle">{Title}</span>
      <div className="leftdivider"></div>
      <span className="leftdescription">{Description}</span>
      <ButtonBlock className="leftbutton" buttontext={btntext} buttonIcon={buttonIcon} />
    </div>
  );
}
