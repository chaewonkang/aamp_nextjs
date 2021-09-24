import Link from 'next/link';

function Header() {
  return (
    <div className='header_container'>
      <div className='header_inner'>
        <div>
          <Link href='/about'>
            <h1>About Artist Workshop, Becoming-Local</h1>
          </Link>
        </div>
        <div>
          <span>EN</span>
          <span>|</span>
          <span>KO</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
