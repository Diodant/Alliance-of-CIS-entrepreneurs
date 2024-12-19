import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "./Breadcrumb";
import articlesData from './articlesData'; 


const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>

    <div className="wrapper">
    <Breadcrumb currentPage='Статьи' />
      <div className="news _catalog">
        {articlesData.map((article, index) => (
          <div key={index} className="news__item news__catalog-item">
            <img src={article.image} alt={article.title} className="news-image" />
            <div className="article-info">
            
            <Link className='news__item-title-wrap link _gray' to={`/articles/${article.id}`}>
            <div className='d-flex'>
              <h3 className="news__item-title">{article.title}</h3>
            <p className='news__item-text'>{article.text}</p>
            <hr className="news__item_hr"/>
            <span class="news__item-date  ">{article.date}</span>
            </div>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArticlesList;
