import Link from 'next/link';
import { useRouter } from 'next/router';


function Header() {
  const router = useRouter();

  const { pathname } = router;
  const originPath = pathname.replace('/en', '');

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
        <div className='global'>
          <Link scroll={false} href={pathname.startsWith('/ko/') ?
              originPath
              : ""} locale='en'>
			  <a>
            <span
              style={
                router.locale === 'en'
                  ? {
                      borderBottom: '1px solid #000',
                    }
                  : null
              }
            >
              EN
            </span>
			</a>
          </Link>
          <span>/</span>
          <Link scroll={false} href={pathname.startsWith('/en/') ?
              originPath
              : ""} locale='ko'>
            <span
              style={
                router.locale === 'ko'
                  ? {
                      borderBottom: '1px solid #000',
                    }
                  : null
              }
            >
              KO
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
