import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ECECEC;
  position: sticky;
  top: 0;
  width: 100%;
  height: 9vh;
  z-index: 1;
  color: #F47314;


  div {
    margin-left: 40px;
    cursor: pointer;

    > a {
      color: #F47314 ;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
    
  svg {
    color: #fff;
    font-size: 40px;
    display: none;
  }
  .logo{
    width:150px;
    margin-top:20px;
  
  }
  a:hover {
    transition: 0.2s ease;
    color: #073784;
  }

  button {
    width: 180px;
    height: 40px;
    margin-right: 40px;
    background-color: #fbb034;
    font-weight: 700;
    text-align: center;
    color: black;
    font-size: 18px;
    cursor: pointer;
    transition: 1s ease;
    border: none;
  }
 p{
  margin-top:30px;
  width:100%;
  font-size:16px;
  font-weight:bold;
 }
  button:hover {
    scale: 105%;
  }

  @media (max-width: 420px) {
    svg {
      display: flex;
      margin-left: 20px;
    }

    button {
      margin-right: 20px;
      height: 40px;
      width: 150px;
      font-size: 12px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a,
  button {
    margin-left: 50px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffff;
    font-size: 18px;
  }

  a:focus {
    color: #fbb034;
  }

  @media (max-width: 415px) {
    a {
      display: none;
    }
  }
`;
