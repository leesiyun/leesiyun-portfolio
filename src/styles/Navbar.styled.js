import styled from "styled-components";

const NavbarStyle = styled.nav`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 0 30px;
`;

const Logo = styled.h3`
  font-size: 180%;
  padding-left: 10px;
  font-family: "Suez One", serif;
`;

const NavLinks = styled.ul`
  display: flex;
  li {
    color: black;
    font-size: 18px;
    padding: 0 20px 0 0;
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
    top: 8%;
    width: 100%;
    background-color: white;
    padding: 20px 0;
    li {
      padding: 32px;
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
  }
`;

const styledComponents = {
  NavbarStyle,
  Logo,
  NavLinks,
};

export default styledComponents;
