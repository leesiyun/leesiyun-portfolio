import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  height: 5.5vh;
  justify-content: space-between;
  align-items: center;
  padding: 40px 28px;
  width: 100%;
  background-color: ${({ pageTitle }) =>
    pageTitle === "Home" ? "#f6ab00" : "#fff"};
  font-family: "Poppins", sans-serif;
  top: 0;
  position: fixed;
  z-index: 10;
`;

const Logo = styled.h3`
  font-size: 2.7rem;
  padding-left: 1vw;
  font-family: "Suez One", serif;
`;

const NavLinks = styled.ul`
  display: flex;
  li {
    color: black;
    font-weight: 500;
    font-size: 1.7rem;
    padding: 0 0 0 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
    opacity: ${({ mobileMenuToggle }) => (mobileMenuToggle ? "1" : "0")};
    visibility: ${({ mobileMenuToggle }) => (mobileMenuToggle ? "" : "hidden")};
    transition: opacity 0.2s;
    position: absolute;
    box-shadow: rgba(50, 50, 93, 0.23) 0 20px 20px -20px;
    left: 0;
    top: 8vh;
    width: 100%;
    background-color: ${({ pageTitle }) =>
      pageTitle === "Home" ? "#f6ab00" : "#fff"};
    padding: 6px 0 12px 0;
    li {
      padding: 32px;
      width: 100%;
      text-align: center;
      font-size: 1.8rem;
    }
  }
`;

const styledComponents = {
  NavbarStyle,
  Logo,
  NavLinks,
};

export default styledComponents;
