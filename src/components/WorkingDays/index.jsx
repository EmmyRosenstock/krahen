import React from "react";
import * as S from "./styles";
import Img from "../../assets/images/quemsomos.png";

const WorkingDays = () => {
  return (
    <S.WorkingSection id="WorkingDays">
      <S.WorkingContent>  
        <img src={Img} alt="" />
        <S.WorkingText>
          <h2>Visão</h2>
          <p>Ser reconhecida globalmente como uma líder em soluções tecnológicas que transformam negócios e impulsionam a sociedade para um futuro mais conectado e inteligente.

          </p>
        <h2>Missão</h2>
          <p> Nossa missão é desenvolver soluções de tecnologia de ponta que inspirem o progresso, promovam a colaboração e capacitam nossos clientes a alcançar novos patamares de sucesso.

         </p>

        </S.WorkingText>
      </S.WorkingContent>
    </S.WorkingSection>
  );
};

export default WorkingDays;
