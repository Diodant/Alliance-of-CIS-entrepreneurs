import React from 'react';
import backgroundImage from '../images/main.webp';
import handshakeImage from '../images/handshake.svg';
import handshakeImage_2 from '../images/handshake (1).svg';
import buildingImage from '../images/building-shield.svg';
import scaleImage from '../images/scale-unbalanced.svg';
import shuttersImage from '../images/shutterstock_371784607.1000x600.webp';
import peopleImage from '../images/people-line.svg';
import earthImage from '../images/earth-americas.svg';
import articlesData from './articlesData'; 
import { Link } from 'react-router-dom';
import Sponsor_1 from '../images/sponsors/sponsor_1.png'; 
import Sponsor_2 from '../images/sponsors/sponsor_2.png'; 
import Sponsor_3 from '../images/sponsors/sponsor_3.png'; 
import Sponsor_4 from '../images/sponsors/sponsor_4.svg'; 
import Sponsor_5 from '../images/sponsors/sponsor_5.png'; 
import Sponsor_6 from '../images/sponsors/sponsor_6.svg'; 
import Sponsor_7 from '../images/sponsors/sponsor_7.png'; 
import Sponsor_8 from '../images/sponsors/sponsor_8.webp'; 
import Sponsor_9 from '../images/sponsors/sponsor_9.svg'; 
import Sponsor_10 from '../images/sponsors/sponsor_10.svg'; 

const MainPage = () => {

  const logosData = [
    { id: 1, src: Sponsor_1, alt: 'Министерство...' },
    { id: 2, src: Sponsor_2, alt: 'Сбер' },
    { id: 3, src: Sponsor_3, alt: 'ПСБ' },
    { id: 4, src: Sponsor_4, alt: 'Корпорация Синергия' },
    { id: 5, src: Sponsor_5, alt: 'МСП Корпорация' },
    { id: 6, src: Sponsor_6, alt: 'РоссельхозБанк' },
    { id: 7, src: Sponsor_7, alt: 'СУЭК' },
    { id: 8, src: Sponsor_8, alt: 'Россети' },
    { id: 9, src: Sponsor_9, alt: 'МСП Банк' },
    { id: 10, src: Sponsor_10, alt: 'За Бизнес' },
  ];

  const firstThreeArticles = articlesData.slice(0, 3);

    return (
        <>
        <div
          className="main-banner"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="main-banner__content">
            <h1>Международная Бизнес Ассоциация "Альянс предпринимателей СНГ"</h1>
            <div className="main-banner__features ">
              <div className="feature">
                <img className='feature_img' src={handshakeImage} alt="Картинка" />
                <span>Обмен знаниями</span>
              </div>
              <div className="feature">
              <img className='feature_img' src={scaleImage} alt="Картинка" />
                <span>Открытый диалог</span>
              </div>
              <div className="feature">
              <img className='feature_img' src={buildingImage} alt="Картинка" />
                <span>Укрепление деловых связей</span>
              </div>
              <a className="button-red" href='/about'>Подробнее</a>
            </div>
          </div>
        </div>

        <div className="section slider">
      <div className="section__newsSlider" id="slider">
        <div className="wrapper">
          <div className="section__newsSlider_description">

            <div className="section__newsSlider_description-item">
              <a href="/ru/news/xv_moscow_international_automotive_forum_imaf_2024/">
                <div className="title">
                Международная Бизнес Ассоциация "Альянс предпринимателей СНГ"
                </div>
              </a>
              <div className="text">
                <p >
                Международная Бизнес Ассоциация "Альянс предпринимателей СНГ" (АПСНГ) — это независимая некоммерческая организация, объединяющая предпринимателей и компании стран СНГ, которые разделяют миссию ассоциации и активно участвуют в ее деятельности.
                </p>

              </div>
            </div>
          </div>
          <div className="section__newsSlider_container">

              <div className="section__newsSlider_container-item">
                <a >
                  <img
                    src={shuttersImage}
                    alt="Картинка"
                  />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>

<div className='wrapper pb-100'>
    <div className="panel ">
		    <div class="bind">
                                
            <h2>Миссия АПСНГ</h2>
            <p>Основная миссия нашей ассоциации — содействовать развитию бизнеса в странах СНГ, укреплять экономические связи между регионами и создавать благоприятные условия для реализации бизнес-проектов. Мы стремимся быть навигатором и надежным партнером для каждого члена ассоциации, предоставляя инструменты и возможности для успеха.</p>
            <p>Для достижения этих целей АПСНГ организует:</p>
            <ul>
              <li>Обмен знаниями, опытом и лучшими практиками.</li>
              <li>Открытый и конструктивный диалог с государственными органами и международными организациями.</li>
              <li>Установление и укрепление деловых связей между представителями бизнеса из разных стран СНГ.</li>
            </ul>
                </div>
		    </div>
            </div>

            <div className='wrapper pb-100'>
    <div className="panel_dark ">
		    <div class="bind">
                                
            <h2>Основные функции АПСНГ</h2>
            <h3>Голос предпринимателей</h3>
            <p>Мы представляем интересы членов ассоциации на международной арене, активно взаимодействуем с органами государственной власти, общественными организациями и СМИ. Наша цель — укрепление позиций бизнеса, улучшение инвестиционного климата и создание благоприятных условий для развития предпринимательства в странах СНГ.</p>
            <h3>Форум для диалога</h3>
          <p>АПСНГ предоставляет платформу для диалога между предпринимателями, представителями власти и общественными организациями. Мы организуем мероприятия, направленные на обсуждение актуальных вопросов, касающихся бизнес-среды и межгосударственного сотрудничества.</p>
          <h3>Развитие бизнес-сообщества</h3>    
          <p>Ассоциация способствует установлению и укреплению деловых связей, организуя семинары, круглые столы, отраслевые конференции и неформальные встречи, где участники могут обмениваться идеями и обсуждать перспективы совместных проектов.</p>
                </div>
		    </div>
            </div>


            <section className=" wrapper pb-100">
      <div className="box uk-container uk-container-xlarge">
          <div className="uk-flex">
            {/* Первый элемент */}
            <div className="col">
              <div className="infog-icon">
                <img
                  src={peopleImage}
                  className="uk-height-3xsmall"
                  alt="Icon"
                />
              </div>
              <div className="uk-panel">
                <div className="uk-bind uk-width-1-1">
                  <p className="uk-text-super-x" style={{ textAlign: "center" }}>
                    86
                  </p>
                  <p className="uk-text-lead" style={{ textAlign: "center" }}>
                    субъектах РФ
                  </p>
                </div>
              </div>
            </div>

            {/* Второй элемент */}
            <div className="col">
              <div className="infog-icon bind tc ofm t2">
                <img
                  src={handshakeImage_2}
                  className="uk-height-3xsmall"
                  alt="Icon"
                />
              </div>
              <div
                className="uk-panel"

              >
                <div className="uk-bind uk-width-1-1">
                  <p className="uk-text-super-x" style={{ textAlign: "center" }}>
                    417
                  </p>
                  <p className="uk-text-lead" style={{ textAlign: "center" }}>
                    местных отделений
                  </p>
                </div>
              </div>
            </div>

            {/* Третий элемент */}
            <div className="col">
              <div className="infog-icon bind tc ofm t2">
                <img
                  src={earthImage}
                  className="uk-height-3xsmall"
                  alt="Icon"
                />
              </div>
              <div
                className="uk-panel"

              >
                <div className="uk-bind uk-width-1-1">
                  <p className="uk-text-super-x" style={{ textAlign: "center" }}>
                    45
                  </p>
                  <p
                    className="uk-text-lead"
                    style={{ textAlign: "center" }}
                  >
                    представителя<br />
                    в зарубежных странах
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section className="wrapper pb-100">
      <div className='flex'>
        <h2 className='articles-h2'>Последние статьи</h2>
        <div >
          <Link className="button-red" to="/articles">
            Все статьи
          </Link>
        </div>
        </div>
        <hr className="news__item_hr"/>
        <div className="articles-grid">
          {firstThreeArticles.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <Link className='news__item-title-wrap link _gray' to={`/articles/${article.id}`}>
              <h3 className="news__item-title">{article.title}</h3>
              <p className="news__item-text">{article.text}</p>
              <span className="news__item-date">{article.date}</span>
              </Link>
            </div>
          ))}
        </div>

      </section>

      <section className="partners-section">
      <div className="wrapper">
        <div className="partners-grid">
          {logosData.map((logo) => (
            <div className="partner-card" key={logo.id}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
      );
    };


export default MainPage;
