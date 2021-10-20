import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className='header_container'>
      <div className='header_inner'>
        <div id='desktopOnly'>
          {router.asPath.includes('about') ? (
            <Link href='/'>
              <h1 style={{ fontFamily: 'Signifier Italic' }}>
                About Artist Workshop, Becoming-Local
              </h1>
            </Link>
          ) : (
            <Link href='/about'>
              <h1>About Artist Workshop, Becoming-Local</h1>
            </Link>
          )}
        </div>
        <div id='mobileOnly'>
          {router.asPath.includes('about') ? (
            <Link href='/'>
              <h1 style={{ fontFamily: 'Signifier Italic' }}>About</h1>
            </Link>
          ) : (
            <Link href='/about'>
              <h1>About</h1>
            </Link>
          )}
        </div>
        <div>
          <Link href='/' locale='en'>
            <span>EN</span>
          </Link>
          <span>/</span>
          <Link href='/' locale='ko'>
            <span>KO</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
