import React from "react";
import * as S  from "./styles";
import Img1 from "../../assets/images/IMG1.png";

const AboutUs = () => {
  return (
    <S.Container id="About">
      <S.ImagesContainer>
        <img src={Img1} alt="" />
        
      </S.ImagesContainer>
      <S.Text>
        <span>Sobre nós</span>
        <h2>
          Somos uma empresa de tecnologia <br />
          
        </h2>
       <p>Oferecemos as melhores soluções em tecnologia para sua empresa.
Através de desenvolvimento de apps, sistemas completos web, websites,  social mídia e tudo o que seu negócio precisar para alcançar mais clientes e obter melhores resultados</p>
        
      </S.Text>
    </S.Container>
  );
};

export default AboutUs;
