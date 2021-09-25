import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className='header_container'>
      <div className='header_inner'>
        <div>
          <Link href='/about'>
            {router.asPath.includes('about') ? (
              <Link href='/'>
                <h1 style={{ fontStyle: 'italic' }}>
                  About Artist Workshop, Becoming-Local
                </h1>
              </Link>
            ) : (
              <Link href='/about'>
                <h1>About Artist Workshop, Becoming-Local</h1>
              </Link>
            )}
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
