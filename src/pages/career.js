import * as React from "react";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import styled from "styled-components";
import bhivenet from "../assets/images/bhivenet.jpg";

const CareerPage = () => (
  <Layout pageTitle="Career">
    <ScrollToTop />
    <PageStyle>
      <Header>
        <div>Career</div>
      </Header>
      <CareerContainer>
        <ImgWrapper>
          <img src={bhivenet} alt="bhivenet " />
        </ImgWrapper>
        <CareerContent>
          <Company>
            <span>ビーハイブネット</span>
            <Date>2021.01 - 2022.06</Date>
          </Company>
          <ul>
            <li>
              <div>H社</div>
              <Date>2022.01 - 2022.06</Date>
              <Project>
                <div>通勤手当別計算｜4人</div>
                <Date>2022.03 - 2022.06</Date>
                <div>設計〜UT</div>
                <div>Window</div>
                <div>Eclipse, Oracle, osqledit</div>
                <div>Java</div>
                <div>Microsoft Teams</div>
              </Project>
              <Project>
                <div>性能劣化対策｜2人</div>
                <Date>2022.03 - 2022.03</Date>
                <div>製造〜ST</div>
                <div>Window</div>
                <div>Eclipse, WinPC, Oracle, osqledit</div>
                <div>Java</div>
                <div>Microsoft Teams</div>
              </Project>
              <Project>
                <div>福利制度改訂ルール｜2人</div>
                <Date>2022.02 - 2022.03</Date>
                <div>製造〜ST</div>
                <div>Window</div>
                <div>Eclipse, WinPC, Oracle, osqledit</div>
                <div>Java</div>
                <div>Microsoft Teams</div>
              </Project>
              <Project>
                <div>連動改善｜2人</div>
                <Date>2022.02 - 2022.02</Date>
                <div>VIEW SQLの作成とテスト</div>
                <div>UT</div>
                <div>Window</div>
                <div>WinPC, Oracle, osqledit</div>
                <div>Microsoft Teams, Skype</div>
              </Project>
              <Project>
                <div>データ取り込み｜2人</div>
                <Date>2022.01 - 2022.02</Date>
                <div>CT</div>
                <div>Window</div>
                <div>Microsoft Teams, Skype</div>
              </Project>
            </li>
            <li>
              <div>M社</div>
              <Date>2021.04 - 2021.12</Date>
              <div>移動インドアデータ作成 | 30人</div>
              <div>チームリーダ｜チーム員 5人</div>
              <div>社内ツールを使用</div>
              <div>Window</div>
              <div>INVIA, AEGIS, 礎</div>
              <div>Google Chat, Google Meet</div>
            </li>
            <li>
              <div>G社</div>
              <Date>2021.02 - 2021.03</Date>
              <div>法人のご契約者様向けサイト｜2人</div>
              <div>Talend 試験書作成とテスト</div>
              <div>Window</div>
              <div>A5M2, Talend, rundeck</div>
              <div>PosgreSQL</div>
              <div>Microsoft Teams</div>
            </li>
          </ul>
        </CareerContent>
      </CareerContainer>
    </PageStyle>
  </Layout>
);

export default CareerPage;

const PageStyle = styled.div`
  background: linear-gradient(-10.5deg, #fff 50%, #f6ab00 50%);
  min-height: 940px;
  max-height: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const Header = styled.header`
  user-select: none;
  width: 100%;
  height: 10vh;
  min-height: 220px;
  display: flex;
  align-items: center;
  div {
    margin: 90px 0 30px 0;
    width: 100%;
    font-weight: 800;
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 768px) {
    min-height: 160px;
    div {
      font-size: 40px;
    }
  }
`;

const ImgWrapper = styled.div`
  user-select: none;
  display: flex;
  width: 280px;
  height: 270px;
  background-color: #fff;
  border-radius: 50%;
  padding: 45px;
  max-width: 1170px;
  align-items: center;
  img {
    width: 190px;
    height: 80px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    padding: 38px;
    img {
      width: 190px;
      height: 80px;
    }
  }

  @media (max-width: 280px) {
    width: 220px;
    height: 220px;
    padding: 20px;
    img {
      width: 185px;
      height: 75px;
    }
  }
`;

const CareerContainer = styled.div`
  display: flex;
  margin: 2vh 10vw;
  justify-content: center;
  color: #43413c;
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`;

const CareerContent = styled.div`
  text-align: start;
  margin-left: 130px;
  ul {
    margin-top: 10px;
  }

  li {
    padding: 30px 0;
    border-bottom: 1px solid #e6e6e6;
  }

  div {
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    width: 100%;
    border-left: none;
    padding: 0;
    font-size: 15px;
    ul {
      padding-left: 2vw;
    }
  }
`;

const Company = styled.div`
  font-size: 27px;
  font-weight: 700;
  div {
    font-size: 20px;
    font-weight: 500;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Date = styled.div`
  color: #7b7d7d;
  padding-bottom: 10px;
`;

const Project = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
`;
