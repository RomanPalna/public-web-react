import NotFound from "../../images/PageNotFound.png";
import "./pageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="page_not_found">
      <p className="page_title">ERROR 404</p>
      <p className="page_title">Page not found</p>
      <img className="page_img" src={NotFound} alt="Page Not Found" />
    </div>
  );
}
