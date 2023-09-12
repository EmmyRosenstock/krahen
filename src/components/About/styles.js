import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10em;
    background-color:#E74C3C ;
    height: 60vh;
    width: 100%;

    span {
        font-weight: 400;
        font-size: 18px;
        color: #f1f1f1f1;
        margin-top:-90px;
    }

    h2 {
        font-weight: 700;
        font-size: 48px;
        color: #f1f1f1f1;
        line-height: 95%;
        margin: 24px 0px;
    }

    p {
        font-weight: 400;
        font-size: 20px;
        color: #f1f1f1;
        line-height: 106%;
    }

    button {
        margin-top: 43px;
        color: #fff;
        width: 188px;
        height: 52px;
        font-size: 15px;
        font-weight: 700;
        background-color: #FBB034;
        border: none;
    }
    
    @media (max-width: 420px) {
        align-items: center;

        h2 {
            font-size: 18px;

        }

        p {
            font-size: 15px;
            padding: 0px 50px;
        }
    }

`

export const ImagesContainer = styled.div `
    display: flex;
    gap: 2em;
    margin-top: -1vh;
    position: relative;

    img:nth-child(1) {
    }
    
    img:nth-child(2) {
        width: 161px;
        height: 118px;
    } 
    img:nth-child(3) {
        width: 214px;
        height: 292px;
        position: absolute;
        top: 170px;
        left: 150px;
        
    }

    @media (max-width: 420px) {
    display: none;
  }
`

export const Text = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`
