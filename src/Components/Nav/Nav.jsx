import { useEffect, useRef } from 'react';
import navCSS from './Nav.module.css';

function Nav({ onBookClick, onBlogClick }) {
  const menu = useRef(null);
  const navbar = useRef(null);

  const menuHandler = () => {
    menu.current?.classList.toggle(navCSS.showNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current?.classList.add(navCSS.navbarScroll);
      } else {
        navbar.current?.classList.remove(navCSS.navbarScroll);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navCSS.navWrapper} ref={navbar}>
      <div className={navCSS.logo}>
        <a href="#home">Grandora</a>
      </div>

      <ul className={navCSS.menuList} ref={menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Category</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a type="button" className={navCSS.blogLinkButton} onClick={onBlogClick}>Blogs</a></li>
      </ul>

      <div className={navCSS.navBtnGroup}>
        <button type="button" className={navCSS.btn} onClick={onBookClick}>Book Now</button>
        <button
          type="button"
          className={navCSS.bars}
          onClick={menuHandler}
          aria-label="Toggle navigation menu"
        >
          <i className="ri-menu-4-line" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;