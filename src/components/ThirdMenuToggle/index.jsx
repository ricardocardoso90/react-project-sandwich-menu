import "./styles.scss";

import vectorPhone from "../../assets/vector-phone.png";
import vectorWhatsapp from "../../assets/vector-whatsapp.png";

export default function ThirdMenuToggle() {
  return (
    <div className="contacts">

      <div className="contacts-box">
        <div className="contacts-box-icon">
          <img src={vectorPhone} alt="" />
        </div>
        <div className="contacts-box-infos">
          <h3>Telefone</h3>
          <span>(62) 3092-3817</span>
        </div>
      </div>

      <div className="contacts-box">
        <div className="contacts-box-icon icon-whatsapp">
          <img src={vectorWhatsapp} alt="" />
        </div>
        <div className="contacts-box-infos">
          <h3>Whatsapp</h3>
          <span>(62) 9 9245-6171</span>
        </div>
      </div>


      <div className="buttons-infos-container">
        <div className="buttons-infos">
          <span>CARRINHO</span>
        </div>
        <div className="buttons-infos button-second">
          <span>ORÇAMENTO</span>
        </div>
      </div>

    </div>
  )
};