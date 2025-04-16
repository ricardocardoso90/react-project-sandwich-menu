import "./styles.scss";

import vectorPhone from "../../assets/vector-phone.png";
import vectorWhatsapp from "../../assets/vector-whatsapp.png";

import iconCarrinho from "../../assets/icon-carrinho.png";
import iconOrcamento from "../../assets/icon-orcamento.png";

export default function FirstMenuSite() {
  return (
    <div className="first-menu-container">
      <div className="first-container-top">
        <div className="first-container-phone">
          <div className="first-container-icon">
            <img src={vectorPhone} alt="" />
          </div>
          <div className="first-container-description">
            <h3>Telefone</h3>
            <span>(62) 3092-3817</span>
          </div>
        </div>

        <div className="first-container-phone">
          <div className="first-container-icon icon-whatsapp">
            <img src={vectorWhatsapp} alt="" />
          </div>
          <div className="first-container-description">
            <h3>Whatsapp</h3>
            <span>(62) 9 9245-6171</span>
          </div>
        </div>

        <div className="first-container-buttom">
          <img src={iconCarrinho}/>
          <span>+ CARRINHO</span>
        </div>
        <div className="first-container-buttom button-second">
          <img src={iconOrcamento}/>
          <span>ORÇAMENTO RÁPIDO</span>
        </div>
      </div>
      <div className="first-container-low">
        <span>Sobre</span>
        <span>Produtos</span>
        <span>Fornecedores</span>
        <span>Depoimentos</span>
        <span>Dúvidas</span>
        <span>Blog</span>
        <span>Orçamento</span>
        <span>ASTHAMEDCARE</span>
      </div>
    </div>
  )
};