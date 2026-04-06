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
                Международная Бизнес Ассоциация "Альянс предпринимателей СНГ" (АПСНГ)
                </div>
              </a>
              <div className="text">
                <p >
                Это независимая некоммерческая организация, объединяющая признанных предпринимателей, инвесторов и руководителей компаний, продемонстрировавших значительные достижения в бизнесе, инновациях и развитии отраслей экономики в странах СНГ и на международном уровне.
              <br />
              Членство в Ассоциации носит селективный характер и предоставляется исключительно по результатам экспертной оценки профессиональных достижений кандидатов, их вклада в развитие бизнеса, а также признания их результатов на национальном или международном уровне.
                </p>

              </div>
            </div>
          </div>
          <div className="section__newsSlider_container">

              <div className="section__newsSlider_container-item">
                <a >
                  <img
                  className='img1'
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
            <p>Основная миссия Ассоциации — способствовать развитию предпринимательства и экономического сотрудничества между странами СНГ, а также поддерживать и продвигать лидеров бизнеса, оказывающих значительное влияние на развитие отраслей и формирование деловой среды.</p>
            <p>Ассоциация выступает как авторитетная платформа, объединяющая лидеров индустрии, обеспечивая профессиональное признание, экспертную оценку достижений и развитие стратегических инициатив, направленных на экономический рост и инновации.
</p>
            <p>Для достижения этих целей АПСНГ:</p>
            <ul>
              <li>Осуществляет отбор и признание выдающихся предпринимателей и бизнес-лидеров
организует экспертные комиссии и жюри для оценки бизнес-проектов, достижений и отраслевых инициатив
</li>
              <li>Формирует профессиональное сообщество лидеров, оказывающих влияние на развитие рынков</li>
              <li>Способствует международному сотрудничеству и обмену передовыми практиками</li>
            </ul>
                </div>
		    </div>
            </div>

            <div className='wrapper pb-100'>
    <div className="panel_dark ">
		    <div class="bind">
                                
            <h2>Основные функции АПСНГ</h2>
            <h3>Экспертное признание и оценка достижений</h3>
            <p>Ассоциация проводит профессиональную оценку достижений предпринимателей, компаний и проектов через экспертные советы, конкурсные комиссии и отраслевые жюри. Участие в таких оценочных процессах осуществляется признанными специалистами и лидерами отрасли.</p>
            <h3>Представительство и влияние</h3>
          <p>АПСНГ представляет интересы предпринимателей на международном уровне, взаимодействует с государственными органами, инвестиционными структурами, отраслевыми объединениями и средствами массовой информации, формируя повестку развития бизнеса и инвестиционного климата.</p>
          <h3>Платформа для экспертного диалога</h3>    
          <p>Ассоциация является площадкой для стратегического диалога между ведущими предпринимателями, инвесторами и представителями власти, способствуя выработке решений, влияющих на развитие бизнеса и экономики.</p>
          <h3>Развитие профессионального сообщества</h3>
          <p>АПСНГ организует международные форумы, отраслевые конференции, экспертные панели и закрытые деловые мероприятия, направленные на развитие сотрудничества, обмен знаниями и формирование новых бизнес-инициатив.</p>
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
