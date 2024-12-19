import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';
import Breadcrumb from "./Breadcrumb";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="news__detail-text mb-20">{block.text}</p>;
        case 'header':
          return <h5 key={index} className="section__subtitle marg-40">{block.text}</h5>;
          case 'sub-header':
            return <div key={index} className="sub-header-text">{block.text}</div>;
        case 'image':
          return <img key={index} src={block.src} alt={block.alt} className="article-page-image" />;
        case 'list':
          return <ul className='page-about__list-item'>
            <li key={index}>{block.text}</li>
            </ul>
        default:
          return null;
      }
    });
  };

  return ( 
    <>
    <Breadcrumb currentPage='Статьи' />
    <div className="wrapper">
      <div className="article-page">
        <h1 className='news__detail-title-text'> {article.title}</h1>
        <span class="news__item-date news__detail-date">{article.date}</span>

        <hr className="news__item_hr"/>
        <img src={article.image} alt={article.title} className="article-page-image" />
        <div className="article-page-content">
          {renderContent(article.content)}
        </div>
        <div className="news__detail-author">Автор: <span >{article.autor}</span></div>
      </div>
    </div>
    </>
  );
};

export default Article;
