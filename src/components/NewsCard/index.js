import { Link } from "react-router-dom";
import "./NewsCard.css";
export default function NewsCard({ newsItem,id }) {
  const { title, body, imageUrl } = newsItem;
  const synopsis = body.slice(0, 150);
  return (
    <Link to={`/newsview/${id} `}>
      <div className="newscard">
        <div
          className="newscardimg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div>
          <div className="newscardtitle">
            <h1>{title}</h1>
          </div>
          <div>
            <span>{synopsis}</span>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  );
}