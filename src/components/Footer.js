import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>
                    <Logo> <LogoImg src="../images/lg.png" alt='Logo'></LogoImg></Logo>
                    <SocialIcons>
                        <SocialIcon href="#">
                             <IconImg src="../images/ld.png" alt="LinkedIn" />
                        </SocialIcon>
                        <SocialIcon href="#">
                            <IconImg src="../images/instagram.png" alt="Instagram" />
                        </SocialIcon>
                        <SocialIcon href="#">
                           <IconImg src="../images/youtube.png" alt="YouTube" />
                        </SocialIcon>
                        <SocialIcon href="#">
                             <IconImg src="../images/twitter.png" alt="Twitter" />
                        </SocialIcon>
                    </SocialIcons>
                </FooterLogo>
                <FooterLinks>
                    <Column>
                        <ColumnTitle>Employer</ColumnTitle>
                        <LinkList>
                            <LinkItem><LinkA href="#">Dashboard</LinkA></LinkItem>
                            <LinkItem><LinkA href="#">Post offer</LinkA></LinkItem>
                            <LinkItem><LinkA href="#">View applications</LinkA></LinkItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnTitle>Student</ColumnTitle>
                        <LinkList>
                            <LinkItem><LinkA as={Link} to="/studentdashboard">Dashboard</LinkA></LinkItem>
                            <LinkItem><LinkA as={Link} to="/studentprofile">Edit profile</LinkA></LinkItem>
                             <LinkItem><LinkA as={Link} to="/studentjobs">Apply To Offers</LinkA></LinkItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnTitle>Resources</ColumnTitle>
                        <LinkList>
                            <LinkItem><LinkA href="#">Support</LinkA></LinkItem>
                        </LinkList>
                    </Column>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #011850;
    color: white;
    padding: 40px 20px;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;

     @media (max-width: 768px) {
       flex-direction: column;
        align-items: center;
    }
`;

const FooterLogo = styled.div`
    flex: 1;
    min-width: 200px;
    
     @media (max-width: 768px) {
        min-width: auto;
         margin-bottom: 20px;
         text-align: center;
    }
`;

const Logo = styled.h3`
     font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const LogoImg = styled.img`
    margin-left: 10px;
  width: 110px;
  height: 40px;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
     
     @media (max-width: 768px) {
        justify-content: center;
     }
`;

const SocialIcon = styled.a`
  text-decoration: none;
  transition: color 0.3s ease;
`;
const IconImg = styled.img`
  width: 30px;
  height: 30px;
    object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
       color: #00aaff;
      transform: scale(1.1);
    filter: brightness(1.2);
  }
`;
const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 2;
    gap: 20px;
    
    @media (max-width: 768px) {
         flex-direction: column;
         align-items: center;
           gap: 15px;
    }
`;

const Column = styled.div`
    min-width: 150px;
      
       @media (max-width: 768px) {
           text-align: center;
        }
`;

const ColumnTitle = styled.h4`
    font-size: 18px;
    margin-bottom: 10px;
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
`;

const LinkItem = styled.li`
    margin-bottom: 5px;
`;
const LinkA = styled.a`
  color: white;
    text-decoration: none;
  transition: color 0.3s ease;
    &:hover{
         color: #00aaff;
    }
`;

export default Footer;