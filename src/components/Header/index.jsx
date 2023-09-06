import React from "react";
import * as S from "./styles";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { ModalContext } from "../../contexts/contexts";
import SideMenu from "../Sidebar";
import logo from '../../assets/images/logosemfundo.png'
const Header = () => {
  const { sidebar, openSideBar } = useContext(ModalContext);

  return (
      <S.HeaderBar>
        <FiMenu onClick={openSideBar} />
        {sidebar && <SideMenu />}
        <div>
          <img src={logo} className="logo"/>
        </div>
        <p>Voando além da inovação</p>
        <S.Nav>
          <a href="#About">Nossos serviços</a>
          <a href="#WorkingDays">Missão</a>
          <a href="#Affiliate">Valores</a>
          <a href="#BookNow">Contato</a>
        </S.Nav>
      </S.HeaderBar>
  );
};

export default Header;
