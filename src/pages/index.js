import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import siyunCharacter from "../assets/images/siyun.jpg";
import { contactData } from "../assets/contactData";

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <PageStyle>
        <Title>
          <span>SIYUN</span>'S PORTFOLIO
        </Title>
        <img src={siyunCharacter} alt="siyun character" />
        <Content>
          こんにちは <span>Front-End Developer</span> シユンです。
        </Content>
        <Contact>Contact</Contact>
        <ContactListContainer>
          <ul>
            {contactData.map((contact, index) => {
              return (
                <li key={index}>
                  {contact.link ? (
                    <a href={contact.link} target="_blank" rel="noreferrer">
                      <ContactListIcon icon={contact.icon} />
                      {contact.text}
                    </a>
                  ) : (
                    <>
                      <ContactListIcon icon={contact.icon} />
                      {contact.text}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </ContactListContainer>
      </PageStyle>
    </Layout>
  );
};

export default HomePage;

const PageStyle = styled.div`
  background: linear-gradient(-10.5deg, #fff 50%, #f6ab00 50%);
  min-height: 1050px;
  max-height: 1400px;
  padding-top: 80px;
  width: 100%;
  text-align: center;
  position: relative;
  img {
    display: flex;
    border-radius: 50%;
    width: 35%;
    max-width: 280px;
    min-width: 240px;
    margin: 3vh auto;
  }
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 75px;
  font-weight: 700;
  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    margin-top: 20px;
  } ;
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
  margin-top: 10vh;
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
