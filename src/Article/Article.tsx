import "./Article.css";

interface IProps {
  ImageUrl: string;
  TitleArticle: string;
  DescriptionArticle: string;
  ButtonMore: any;
}

export default function Article(props: IProps) {
  return (
    <div className="article">
      <div className="articleContainer" />
      <span className="articleTitle">{props.TitleArticle}</span>
      <span className="articleDescription">{props.DescriptionArticle}</span>
      <div className="articleImage" style={{ backgroundImage: `url(${props.ImageUrl})` }} />
      <span className="articleBtn">{props.ButtonMore}</span>
    </div>
  );
}
