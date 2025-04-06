import React from 'react';
import styled from 'styled-components';

const Upbutton = () => {
    const handleScrollUp = () => {
        window.scrollBy({
            top: -window.innerHeight, // Scrolls by one full viewport height
            left: 0,
            behavior: 'smooth', // Smooth scroll animation
        });
    };

    return (
        <StyledWrapper>
            <button className="button mt-4 mb-4" onClick={handleScrollUp}>
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 141.2V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V141.2L54.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(181, 160, 255);
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Go Up!";
    color: white;
    font-size: 0px;
    transition-duration: .3s;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
`;

export default Upbutton;
