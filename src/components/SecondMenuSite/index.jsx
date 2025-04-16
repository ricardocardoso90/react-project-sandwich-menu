import "./styles.scss";

import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";
import icon5 from "../../assets/5.png";

export default function SecondMenuSite() {
  return (
    <>
      <div className="second-container-box">
        <img src={icon1} alt="" />
        <span>Linha Odontológica</span>
      </div>
      <div className="second-container-box">
        <img src={icon2} alt="" />
        <span>Linha Estética</span>
      </div>
      <div className="second-container-box">
        <img src={icon3} alt="" />
        <span>Linha Veterinária</span>
      </div>
      <div className="second-container-box">
        <img src={icon4} alt="" />
        <span>Medicamentos Injetáveis</span>
      </div>
      <div className="second-container-box">
        <img src={icon5} alt="" />
        <span>Materiais Hospitalares</span>
      </div>
    </>
  )
};