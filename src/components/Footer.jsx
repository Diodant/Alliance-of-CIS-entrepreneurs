import React from "react";
import IsoImg from '../images/isologow.png'
import Logo from '../images/logo.svg'


const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_top">
        <div className="wrapper">
          {/* Логотип и контакты */}
          <div className="block">
            <div className="footer_logo">
              <img
                src={Logo}
                alt="Логотип"
              />
            </div>
            <div className="contacts">
              <div className="contacts-elem-title"></div>
              <a href="tel:+8 495 663-06-06" className="contacts-elem">
                Tel. +8 495 663-06-06
              </a>
              <a href="mailto:iba-cis@gmail.com" className="contacts-elem">
                Email: iba-cis@gmail.com
              </a>
            </div>
          </div>

          {/* Меню ссылок */}
          <div className="block block_x2">
            <div className="list">
              <a href="/" className="list-elem">
                Главная
              </a>
              <a href="/contacts" className="list-elem">
                Контакты
              </a>
              <span className="list-elem list-elem-divider"></span>
              <a
                href="/members"
                className="list-elem"
              >
                Члены Ассоциации
              </a>
              <a
                href="/charter"
                className="list-elem"
              >
                Устав
              </a>
              <a href="/ethical" className="list-elem">
              Этический кодекс
              </a>
            </div>

            <div className="list">
              <a href="/about" className="list-elem">
                О нас
              </a>
              <a href="/articles" className="list-elem">
              Статьи
              </a>
              <a href="/executive-committee" className="list-elem">
              Исполнительный комитет
              </a>
              <a href="/legal-committee" className="list-elem">
              Юридический комитет
              </a>
              <a href="/quality_of_life_committee" className="list-elem">
              Комитет по качеству жизни
              </a>
            </div>
          </div>

          {/* Приложения и социальные сети */}
          <div className="block">

            <div className="socials">
              <a
                href="https://twitter.com/"
                className="btn btn_blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon twitter"></i>
              </a>
              <a
                href="https://t.me/"
                className="btn btn_blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon telegram"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                className="btn btn_blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon youtube"></i>
              </a>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="isoLogo"
            >
              <img
                src={IsoImg}
                alt="Политика в области качества"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="wrapper">
          <div className="copy">2019 © Международная Бизнес Ассоциация "Альянс предпринимателей СНГ"</div>
        </div>
      </div>

      <img
        src="https://mc.yandex.ru/pixel/9197535321822587988?rnd=11157223"
        style={{ display: "contents" }}
        alt=""
      />
    </footer>
  );
};

export default Footer;
