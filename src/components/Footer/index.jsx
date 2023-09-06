import React from "react";
import * as S from "./styles";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const PageFooter = () => {
  return (
    <S.Footer id="Footer">
      
        

      <div className="bottom-line">
        <span>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </span>
        <span>
          <a href="https://www.facebook.com/profile.php?id=61551096685741"><FaFacebookF /></a>
        <a href="https://instagram.com/krahen_tecnologia?igshid=OGQ5ZDc2ODk2ZA=="> <FaInstagram /></a>
        
        </span>
      </div>
    </S.Footer>
  );
};

export default PageFooter;
