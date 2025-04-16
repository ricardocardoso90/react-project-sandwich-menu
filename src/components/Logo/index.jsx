import "./styles.scss";
import menuLogo from "../../assets/menu-logo.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={menuLogo}/>
    </div>
  )
};