import React from "react";
import homeImage from '../images/home.svg'

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="breadcrumb wrapper">
              <h1 className="breadcrumb__title">{currentPage}</h1>
      <div className="breadcrumb__path">
        <span className="breadcrumb__item">
          <a href="/" className="breadcrumb__link">
            <img src={homeImage} alt="home" />
          </a>
        </span>
        <span className="breadcrumb__divider">/</span>
        <span className="breadcrumb__item">
        {currentPage}
        </span>
        <span className="breadcrumb__divider">/</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
