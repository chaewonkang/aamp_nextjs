import React, { useState } from 'react';
import logo from '../static/images/adj_logo.svg';
import closeBtn from '../static/images/closeBtn.png';

function InfoBlock() {
  const [isInfoShow, setIsInfoShow] = useState(false);

  return (
    <div className='info_block'>
      <img src={logo}></img>
      <span onClick={() => setIsInfoShow(!isInfoShow)}>Info</span>
      {isInfoShow && (
        <div className='overlay'>
          <img
            id='closeBtn'
            src={closeBtn}
            onClick={() => setIsInfoShow(!isInfoShow)}
          ></img>
          <p>
            Adj is a creative agency specializing in branding and advertising.
            We are creative thinkers on a mission to develop brand strategies
            and advertising designs that cannot be overlooked. We also have a
            rich network of designers, Illustrators, and strategists, and can
            build the perfect team for any design project. We thrive on complex
            communication challenges and go out of our way to help brands grow.
            We understand design serves a purpose and are driven to make a
            positive impact in the world as we work with individuals and
            organizations to create brands that matter.
          </p>
          <div className='info_detail'>
            <div>
              <p>Information</p>
              <p>Info@adj.kr</p>
            </div>
            <div>
              <p>Telephone</p>
              <p>82(0)2 320 1960</p>
            </div>
            <div>
              <p>Director</p>
              <p>jaeunjeon@adj.kr</p>
            </div>
            <div>
              <p>Mobile</p>
              <p>82(0)10 8909 1663</p>
            </div>
          </div>
          <div className='info_detail_mobile'>
            <div>
              <p>Information</p>
              <p>info@adj.kr</p>
              <p>82(0)2 320 1960</p>
            </div>
            <div>
              <p>Director</p>
              <p>jaeunjeon@adj.kr</p>
              <p>82(0)10 8909 1663</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoBlock;
