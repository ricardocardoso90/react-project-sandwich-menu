import "./styles.scss";

import imageProduct from "../../assets/image-product.png";
import vectorWhatsapp from "../../assets/vector-whatsapp.png";
import iconOrcamento from "../../assets/icon-orcamento.png";


export default function Product() {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={imageProduct} />
      </div>

      <div className="product-description">
        <span>MÁSCARA TRIPLA</span>
        <span>ELÁTICO C/50</span>
        <a href="">saiba mais</a>
      </div>

      <div className="product-buttons">
        <div className="buttons-infos first-button">
          <img src={iconOrcamento} />
          <span>ORÇAMENTO</span>
        </div>

        <div className="buttons-infos second-button">
          <img src={vectorWhatsapp} />
        </div>
      </div>
    </div>
  )
};