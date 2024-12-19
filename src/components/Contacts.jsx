import React from 'react';
import Breadcrumb from "./Breadcrumb";

const Contacts = () => {
  return (
    <>
        <Breadcrumb currentPage='Контакты' />
    <div className="section content">
      <div className="wrapper">	



        <div className="contacts_top_left"> 
          <div className="contacts_top_adress">
            <span><i className="fas fa-map-marker-alt"></i>Адрес</span>
            <p>Котельническая набережная, дом 43, г. Москва, 109256</p>
          <p>ИНН/КПП: 7720855686/885101001</p>
          <p>ОГРН: 1027700139695</p>
          </div>

          <div className="contacts_top_mail">
            <span>
              <i className="far fa-envelope"></i>
              E-mail: <a href="mailto:iba-cis@gmail.com">iba-cis@gmail.com</a>
            </span>
          </div>

          <div className="contacts_top_phone">
            <span><i className="fas fa-phone"></i>Телефон</span>
            <div>
              <b>Москва</b>
              Тел. +8 495 663-06-06<br /><br />
            </div>
          </div>
        </div>

        <div className="contacts_top_right">

        <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5d0237165b5686fffa1cf729dc0b6ef25cd15011ba7808ba35eabc05d9e8622&amp;source=constructor"
        width="100%"
        height="450"
        frameBorder="0"
        title="yandex-map"
      ></iframe>
        </div>

        <div className="clear"></div>

        <h2><br /></h2>
        <div className="contacts_middle"><br /></div>
        <div className="clear"></div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
