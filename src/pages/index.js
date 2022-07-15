import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as BrandsIcons from "@fortawesome/free-brands-svg-icons";
import * as SoildIcons from "@fortawesome/free-solid-svg-icons";
import siyunCharacter from "../assets/images/siyun.jpg";

const HomeBackground = styled.div`
  background: linear-gradient(-10.5deg, #fff 50%, #f6ab00 50%);
  min-height: 900px;
  max-height: 980px;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  position: fixed;
  @media (max-width: 768px) {
    position: relative;
  } ;
`;

const Title = styled.div`
  padding-top: 5vh;
  font-size: 6rem;
  font-weight: 600;
  span {
    color: #fff;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    font-size: 5rem;
  } ;
`;

const Image = styled.img`
  display: flex;
  border-radius: 50%;
  width: 35%;
  max-width: 280px;
  min-width: 240px;
  margin: 3vh auto;
`;

const Content = styled.div`
  margin-top: 11vh;
  font-size: 2rem;
  span {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 1.7rem;
  } ;
`;

const Contact = styled.div`
  margin-top: 12vh;
  font-size: 2.5rem;
  font-family: "Suez One", serif;
  @media (max-width: 768px) {
    margin-top: 90px;
    font-size: 2.3rem;
  } ;
`;

const ContactListContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  ul {
    display: block;
    text-align: left;
  }
  li {
    margin-bottom: 11px;
  }
  a {
    color: black;
    cursor: pointer;
  }
`;

const ContactListIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  height: 18px;
  width: 18px;
`;

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <HomeBackground>
        <Title>
          <span>SIYUN</span>'S PORTFOLIO
        </Title>
        <Image src={siyunCharacter} />
        <Content>
          こんにちは <span>Front-End Developer</span> シユンです。
        </Content>
        <Contact>Contact</Contact>
        <ContactListContainer>
          <ul>
            <li>
              <ContactListIcon icon={RegularIcons.faEnvelope} />
              leesiyun.official@gmail.com
            </li>
            <li>
              <a
                href="https://github.com/leesiyun"
                target="_blank"
                rel="noreferrer"
              >
                <ContactListIcon icon={BrandsIcons.faGithub} />
                github.com/leesiyun
              </a>
            </li>
            <li>
              <a
                href="https://www.wantedly.com/id/leesiyun"
                target="_blank"
                rel="noreferrer"
              >
                <ContactListIcon icon={SoildIcons.faW} />
                wantedly.com/id/leesiyun
              </a>
            </li>
            <li>
              <ContactListIcon icon={SoildIcons.faLocationDot} />
              Setagaya-ku, Tokyo
            </li>
          </ul>
        </ContactListContainer>
      </HomeBackground>
    </Layout>
  );
};

export default HomePage;
