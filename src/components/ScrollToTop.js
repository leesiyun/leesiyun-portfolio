import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SoildIcons from "@fortawesome/free-solid-svg-icons";

const ScrollToTopStyles = styled.div`
  button {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 15px;
    border-radius: 100%;
    font-size: 23px;
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3);
    border: 0 none;
    margin: 30px;
    opacity: ${({ isVisible }) => (isVisible ? "100" : "0")};
    animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.1s;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () =>
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <ScrollToTopStyles isVisible={isVisible}>
      <button onClick={scrollToTop}>
        <FontAwesomeIcon icon={SoildIcons.faChevronUp} />
      </button>
    </ScrollToTopStyles>
  );
};

export default ScrollToTop;
