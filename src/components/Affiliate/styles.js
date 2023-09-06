import styled from "styled-components";
import Bg from "../../assets/images/IMG3.png";

export const Container = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;

  h2 {
    font-weight: 400;
    font-size: 18px;
    color: #fbb034;
  }

  li {
    font-weight: 700;
    font-size: 20px;
    line-height: 94%;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    list-style-type: none
  }

  p{
    color:#073784;
    margin-bottom: 2rem;
    font-size:22px;
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 1.6rem;
      padding: 0px 50px;
    }
  }
  `
 
;
