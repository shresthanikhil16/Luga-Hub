import React, { useState, useEffect, ReactNode } from 'react';
import { FaAddressCard, FaBars, FaPlus, FaEye, FaUser, FaArrowRight, FaList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

interface MenuItem {
  path: string;
  name: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      const imageContainer = document.querySelector('.add-product-page') as HTMLElement | null;
      if (imageContainer) {
        imageContainer.style.backgroundSize = isOpen ? 'cover' : 'contain';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const menuItem: MenuItem[] = [
    {
      path: '/',
      name: 'About',
      icon: <FaAddressCard />,
    },
    {
      path: '/AddProduct',
      name: 'Add Product',
      icon: <FaPlus />,
    },
    {
      path: '/ViewProduct',
      name: 'View Product',
      icon: <FaEye />,
    },
    {
      path: '/TotalOrders',
      name: 'Total Orders',
      icon: <FaList />,
    },
    {
      path: '/Profile',
      name: 'Profile',
      icon: <FaUser />,
    },
    {
      path: '/LogOut',
      name: 'Log Out',
      icon: <FaArrowRight />,
    },
  ];
  
  return (
    <div className="container">
      <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
        <div className="top_section">
          <img 
            src="/images/logo1.png" 
            alt="Logo" 
            style={{
              display: isOpen ? 'inline-block' : 'none',
              height: '50px',
              marginRight: '10px'
            }}
          />
          <h1 style={{ 
            display: isOpen ? 'inline-block' : 'none',
            fontFamily: 'Hans Sans, Franklin Gothic Medium',
            color: 'white'
          }} className="logo">
            LugaHub
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="menu-item link"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ 
              display: isOpen ? 'block' : 'none',
              fontFamily: 'Hans Sans, Franklin Gothic Medium',
              color: 'white'
            }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
