import Link from 'next/link';

function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer_inner'>
        <div>
          <span>Adj</span>
        </div>
        <div>
          <span>Information</span>
          <p>info@adj.kr</p>
        </div>
        <div>
          <span>Director</span>
          <p>jaeunjeon@adj.kr</p>
        </div>
        <div>
          <span>Telephone</span>
          <p>82(0)2 320 1960</p>
        </div>
        <div>
          <span>Mobile</span>
          <p>82(0)10 8908 1663</p>
        </div>
      </div>
      <div className='footer_inner_mobile'>
        <div>
          <span>Adj</span>
        </div>
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
  );
}

export default Footer;
