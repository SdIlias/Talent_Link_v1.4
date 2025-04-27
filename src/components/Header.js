import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo><LogoImage src="../images/lg.png" alt='Logo' /></Logo>
            <Nav>
                <NavLink to="/StudentDashboard" isStudentBtn={true}>
                    <NavButton>Student</NavButton>
                </NavLink>
                <NavLink to="/employer">
                    <NavButton>Employer</NavButton>
                </NavLink>
            </Nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #011850;
    color: white;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 10px;
      gap: 10px;
    }
`;

const Logo = styled.div`
    /* You can add logo-specific styles here */
`;

const LogoImage = styled.img`
     /* width: 120px;
    height: 50px; */
`;


const Nav = styled.nav`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    ${props => props.isStudentBtn && `
      & button{
       min-width: 100px;
      }
    `}
`;
const NavButton = styled.button`
    padding: 6px 0px; /* Reduced padding */
    background-color: white;
    border: 2px solid white;
    border-radius: 8px;
    color: #011850;
    font-size: 1rem; /* Reduced font size */
    font-weight: bolder;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    min-width: 100px; /* Added a min-width for consistent size */
    text-align: center; /* Center the text for better alignment */


    &:hover {
        background-color: #011850;
        color: white;
    }
`;

export default Header;