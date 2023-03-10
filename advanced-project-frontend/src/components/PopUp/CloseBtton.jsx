import React from "react";

const CloseButton = ({ onClick }) => {

    const iconStyle = {
        position: "absolute",
        transform: "translateX(110px)",
        height: "40px",
        width: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "200ms",
        marginLeft: '14.1%',
      
        '@media (max-width: 768px)': {
          transform: "translateX(70px)",
          marginLeft: '10%',
        },
      
        '@media (max-width: 480px)': {
          transform: "translateX(30px)",
          marginLeft: '5%',
        }
      };
      
      const svgStyle = {
        width: "15px",
        fill: "#a80707",
        transition: "200ms",
      };
      
      const handleOnClick = () => {
        if (onClick) onClick();
      };
      
  return (
    <button  onClick={handleOnClick}>
      <span style={iconStyle} className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={svgStyle}
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
        </svg>
      </span>
    </button>
  );
};

export default CloseButton;
