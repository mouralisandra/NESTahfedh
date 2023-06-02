import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: rgb(32, 32, 32);
  color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 5%;
  font-size: 34px;
`;

const GitHubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
 
`;

const GitHubIcon = styled(FaGithub)`
  font-size: 30px;
  margin-right: 0.5rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Sandra Mourali, Eya Ridene, Mariem Ksontini
      </FooterText>
      <GitHubContainer>
        <a href="https://github.com/mouralisandra/NESTahfedh">
          <GitHubIcon />
        </a>
        <a href="https://github.com/EyaRidene/NESTahfedhProject">
          <GitHubIcon />
        </a>
        <a href="https://github.com/MariemKsontini/NESTahfedh-Store">
          <GitHubIcon />
        </a>
      </GitHubContainer>
    </FooterContainer>
  );
};

export default Footer;
