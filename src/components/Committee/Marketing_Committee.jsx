import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Marketing_Committee_1 from "../../images/Committee/Marketing_Committee_1.jpg";
import Marketing_Committee_2 from "../../images/Committee/Marketing_Committee_2.jpg";
import Marketing_Committee_3 from "../../images/Committee/Marketing_Committee_3.png";
import Marketing_Committee_4 from "../../images/Committee/Marketing_Committee_4.jpg";


const Data = [
  {
    name: 'Вероника Войновян',
    title: 'Директор по маркетингу',
    photo: Marketing_Committee_1 
  },
  {
    name: 'Екатерина Ена',
    title: 'Директор по маркетингу',
    photo: Marketing_Committee_2
  },
  {
    name: 'Татьяна Запольская',
    title: 'Менеджер по связям с общественностью/ Public Relations Manager',
    photo: Marketing_Committee_3
  },
  {
    name: 'Марина Пиотровская',
    title: 'Head of Marketing and PR Department',
    photo: Marketing_Committee_4
  },

];

const Marketing_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Комитет по маркетингу и коммуникациям' />
    <div className="cochairs-container wrapper">
      

      <ul>
        <li>Комитет — это форум для специалистов в области маркетинга и PR, предоставляющий возможность обмена идеями и опытом и получения полезной информации по вопросам, связанным с маркетингом, PR и тенденциями развития рынков;</li>
        <li className='pb-20'>В задачи Комитета входит оказание помощи в планировании и проведении различных мероприятий ассоциации, а также содействия в привлечении внимания общественности к деятельности АПСНГ и продвижении ее интересов.</li>
      </ul>
      <p>Заседания Комитета по маркетингу и коммуникациям проходят ежемесячно в офисе АПСНГ.</p>
      <h1>Сопредседатели Комитета:</h1>
      <div className="cochairs-table">
        {Data.map((person, index) => (
          <div className="cochairs-row" key={index}>
            <div className="cochairs-photo-cell">
              <div className="cochairs-photo-wrapper">
                <img src={person.photo} alt={person.name} className="cochairs-photo" />
              </div>
            </div>
            <div className="cochairs-info-cell">
              <h2>{person.name}</h2>
              <p>{person.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className='pt-50'>Мы приглашаем участвовать в нашем Комитете.  Мы всегда рады интересным статьям, письмам, фотографиям и предложениям членов ассоциации. Если у Вас есть желание внести свой вклад в развитие АПСНГ, пожалуйста, свяжитесь с нами через административный офис АПСНГ.</p>
    </div>
    </>
  );
};

export default Marketing_Committee;
