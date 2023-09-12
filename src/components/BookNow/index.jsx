import * as S from "./styles";
import React, { useContext } from "react";
import Modal from "react-modal";
import { AiOutlineWhatsApp } from "react-icons/ai";
import ModalContent from "../Modal/index"
import { ModalContext } from "../../contexts/contexts";
import { CustomStyles } from "../Modal/modal";

export const Book = () => {
  const { modal, openModal, closeModal } = useContext(ModalContext);

  return (
    <S.BookContainer  id="BookNow">
      <S.DescriptionContainer>
        <S.Description>
          <span>Entre em contato</span>
          <h2>
            Entre em contato e faça o seu orçamento<br />
            Online.
          </h2>

        
        </S.Description>
        <S.CallNow>
          
         <a href="https://api.whatsapp.com/send?phone=839410-5935">
         <div>
            <AiOutlineWhatsApp />
          </div>
          <p>fale conosco pelo whatsapp</p>
         </a>
        </S.CallNow>
      </S.DescriptionContainer>
    </S.BookContainer>
  );
};
