// import method dari npm react-router
import { Link,useLocation } from 'react-router';

const Nav = () => {
  // ambil path dari url nya
  const location = useLocation();

  // split isi nya ke format array dengan delimiter '/'
  const path = location.pathname.split('/');

  return (
    <div className="navbar">
      <img className="main_logo" src={require(`../gpm/gpm5.png`)} />

      <div className="nav">
        <Link to="/home" className={`${path.includes('home') ? 'active' : 'link'}`}>
          <p>Home</p>
        </Link>
        <Link to="/products" className={`${path.includes('products') || path.includes('product') ? 'active' : 'link'}`}>
          <p>Products</p>
        </Link>
        <Link to="/portfolios" className={`${path.includes('portfolios') ? 'active' : 'link'}`}>
          <p>Portfolios</p>
        </Link>
        <Link to="/about" className={`${path.includes('about') ? 'active' : 'link'}`}>
          <p>About</p>
        </Link>
        {/*  */}
        <Link to="/test" className={`${path.includes('test') ? 'active' : 'link'}`}>
          <p className="test">*test*</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
