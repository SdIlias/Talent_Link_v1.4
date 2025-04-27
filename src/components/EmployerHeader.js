// EmployerHeader.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EmployerHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <HeaderContainer>
             <Logo>
               <Link to="/"> <LogoImg src="../images/lg.png" alt="Logo"/></Link>
            </Logo>
            <NavToggle onClick={toggleMenu}>
                <HamburgerIcon open={menuOpen} />
            </NavToggle>
            <NavLinks open={menuOpen}>
                <NavLink to="/employer">Dashboard</NavLink>
                 <NavLink to="/joboffers">Post Offer</NavLink>
                 <NavLink to="/empapps">View Applications</NavLink>
                <NavLink to="/employeprofile" style={{marginLeft :'0px'}}>Edit Profile</NavLink> {/* Added Edit Profile link here*/}
                   <LogoutButtonInMenu>Logout</LogoutButtonInMenu>
            </NavLinks>
             <UserSection>
                 <Link to="/employeprofile"><UserAvatar src="../../images/profilepic.png" alt="User Avatar"/></Link>
                <LogoutButton>Logout</LogoutButton>
            </UserSection>
             <MenuOverlay open={menuOpen} />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #011850;
  color: white;
  height: 60px;
  position: relative;

   @media (max-width: 768px) {
       height: 50px;
        padding: 0.5rem;
        flex-direction: row-reverse;
    }
`;

const Logo = styled.div`
  font-size: 0rem;
  margin-bottom: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
    height: 30px;
`;

const NavToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 30px;
       height: 30px;
    }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: -7px;
  }
  &::after {
    top: 7px;
  }

  ${({ open }) =>
    open &&
    `
    background-color: transparent;
    &::before{
      transform: translateY(7px) rotate(45deg);
    }
    &::after{
        transform: translateY(-7px) rotate(-45deg);
    }
  `}
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.75rem;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
     position: absolute;
     top: 100%;
     right: 0;
    background-color: #011850;
     width: 100%;
     padding: 1rem;
       align-items: center;
        z-index: 100;
        text-align: center;

    a {
        margin: 0.5rem 0;
       font-size: 16px;
      display: block;
     }
  }
`;


const NavLink = styled(Link)`
  margin: 0 0.75rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const UserSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
     @media (max-width: 768px) {
       display : none;
     }
`;

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  margin-right: 0.5rem;
      @media (max-width: 768px) {
         width: 30px; /* Reduced user avatar width */
        height: 30px; /* Reduced user avatar height */
      }
`;

const LogoutButton = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: white;
  color: #011850;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bolder;

  &:hover {
    background-color: #f0f0f0;
  }
`;
const LogoutButtonInMenu = styled.button`
  padding: 0.4rem 0.8rem;
    background-color: white;
  color: #011850;
    border: none;
    border-radius: 5px;
   cursor: pointer;
   font-size: 14px;
    font-weight: bolder;
    margin: 0.5rem 0;

  &:hover {
    background-color: #f0f0f0;
  }
  @media (min-width: 769px) {
     display: none;
   }
`;
const MenuOverlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
   height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 99;
  @media (max-width: 768px) {
    top: 50px;
 }
`;

export default EmployerHeader;