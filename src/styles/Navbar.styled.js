import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 28px;
  width: 100%;
  background-color: ${({ pageTitle }) =>
    (pageTitle === "Home") | (pageTitle === "Career") ? "#f6ab00" : "#fff"};
  font-family: "Poppins", sans-serif;
  top: 0;
  position: fixed;
  z-index: 10;

  h3 {
    font-size: 2.7rem;
    padding-left: 1vw;
    font-family: "Suez One", serif;
  }

  ul {
    display: flex;
  }

  li {
    color: black;
    font-weight: 500;
    font-size: 1.7rem;
    padding: 0 0 0 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    ul {
      display: block;
      opacity: ${({ mobileMenuToggle }) => (mobileMenuToggle ? "1" : "0")};
      visibility: ${({ mobileMenuToggle }) =>
        mobileMenuToggle ? "" : "hidden"};
      transition: opacity 0.2s;
      position: absolute;
      box-shadow: rgba(50, 50, 93, 0.23) 0 20px 20px -20px;
      left: 0;
      top: 8vh;
      width: 100%;
      background-color: ${({ pageTitle }) =>
        (pageTitle === "Home") | (pageTitle === "Career") ? "#f6ab00" : "#fff"};
      padding: 10px 0 22px 0;
    }
    li {
      padding: 32px;
      width: 100%;
      text-align: center;
      font-size: 1.8rem;
    }
  }
`;

const styledComponents = { NavbarStyle };

export default styledComponents;
