import "./Header.css";
import { Link } from "react-router-dom";
import { Back } from '@cred/neopop-web/lib/components';

export default function Header() {
  return (
    <section className="header">
      <Link to={'/'}><Back/></Link>
      <div className="headerName">News24</div>
      
    </section>
  );
}