import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  FaUserCircle,
  FaCaretDown,
  FaHome,
  FaPen,
  FaCog,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt
} from 'react-icons/fa';
import ProfileSlidebar from './ProfileSlidebar';
import SwitchDemo from '../switch/Switch'; // Importing SwitchDemo
import { logoutUser } from '../../redux/apiCalls/authApiCall'; // Ensure this import is correct
import './navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { categories } = useSelector(state => state.category);
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-secondary '> 
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            
           
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor02'>
            <ul className='navbar-nav me-auto mx-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link custom-nav-link'>
                  <FaHome /> {t('home')}
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle custom-nav-link'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <FaPen /> {t('posts')} <FaCaretDown />
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='/posts/create-post'>
                    <FaPen /> {t('create_post')}
                  </a>
                  <a className='dropdown-item' href='/posts'>
                    <FaPen /> {t('posts_page')}
                  </a>
                  <a className='dropdown-item' href='/posts/categories'>
                    <FaPen /> {t('categories')}
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle custom-nav-link'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Categories <FaCaretDown />
                </a>
                <div className='dropdown-menu'>
                  {categories.map((category) => (
                    <Link
                      className='dropdown-item'
                      key={category._id}
                      to={`/posts/categories/${category.title}`}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </li>
              {user?.isAdmin && (
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle custom-nav-link'
                    data-bs-toggle='dropdown'
                    href='#'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <FaCog /> {t('admin_dashboard')} <FaCaretDown />
                  </a>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='/admin-dashboard'>
                      <FaCog /> {t('main_dashboard')}
                    </a>
                    <a
                      className='dropdown-item'
                      href='/admin-dashboard/users-table'
                    >
                      <FaCog /> {t('users_table')}
                    </a>
                    <a
                      className='dropdown-item'
                      href='/admin-dashboard/posts-table'
                    >
                      <FaCog /> {t('posts_table')}
                    </a>
                    <a
                      className='dropdown-item'
                      href='/admin-dashboard/categories-table'
                    >
                      <FaCog /> {t('categories_table')}
                    </a>
                    <a
                      className='dropdown-item'
                      href='/admin-dashboard/comments-table'
                    >
                      <FaCog /> {t('comments_table')}
                    </a>
                    <a className='dropdown-item' href='/status'>
                      <FaCog /> {t('status')}
                    </a>
                    <a className='dropdown-item' href='/create-favicon'>
                      <FaCog /> {t('create_favicon')}
                    </a>
                  </div>
                </li>
              )}
            </ul>
            <form className='d-flex align-items-center'>
              <SwitchDemo isDarkMode={isDarkMode} toggleTheme={toggleTheme} />{' '}
              {!user ? (
                <>
                  <a href='/register' className='nav-link custom-nav-link'>
                    <FaUserPlus /> {t('Register')}
                  </a>
                  <a href='/login' className='nav-link custom-nav-link'>
                    <FaSignInAlt /> {t('login')}
                  </a>
                </>
              ) : (
                <>
                  <a
                    href='/'
                    className='nav-link custom-nav-link'
                    onClick={() => logoutUser()}
                  >
                    <FaSignOutAlt /> {t('logout')}
                  </a>
                  <a
                    href='#'
                    className='nav-link custom-nav-link'
                    onClick={handleOffcanvasShow}
                  >
                    <FaUserCircle size={30} />
                  </a>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`}
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
        style={{ visibility: showOffcanvas ? 'visible' : 'hidden' }}
      >
        <div className='offcanvas-header bg-light text-dark text-center d-flex justify-content-between'>
          <h5 id='offcanvasRightLabel'>User Profile</h5>
          <button
            type='button'
            className='btn-close text-reset'
            aria-label='Close'
            onClick={handleOffcanvasClose}
          ></button>
        </div>
        <div className='offcanvas-body bg-secondary text-blue'>
          <ProfileSlidebar
            isSidebarOpen={showOffcanvas}
            toggleSidebar={handleOffcanvasShow}
          />
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;