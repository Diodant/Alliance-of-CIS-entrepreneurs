import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Real_Estate_Committee_1 from "../../images/Committee/Real_Estate_Committee_1.jpg";
import Real_Estate_Committee_2 from "../../images/Committee/Real_Estate_Committee_2.jpg";
import Real_Estate_Committee_3 from "../../images/Committee/Real_Estate_Committee_3.jpeg";
import Real_Estate_Committee_4 from "../../images/Committee/Real_Estate_Committee_4.png";


const Data = [
  {
    name: 'Нелли Алейникова',
    title: 'Директор департамента по работе с корпоративными клиентами',
    title_2: 'Maris',
    photo: Real_Estate_Committee_1 
  },
  {
    name: 'Вера Сережина',
    title: 'Руководитель направления клиентского опыта группы',
    title_2: 'RBI',
    photo: Real_Estate_Committee_2
  },
  {
    name: 'Арина Довженко',
    title: 'Партнер',
    title_2: 'Nordic Star',
    photo: Real_Estate_Committee_3
  },
  {
    name: 'Вице-президент',
    title: 'Старший юрист Forte Tax & Law',
    title_2: 'Becar Asset Management',
    photo: Real_Estate_Committee_4
  },

];

const Real_Estate_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Комитет по недвижимости' />
    <div className="cochairs-container wrapper">
      <p>Комитет активно взаимодействует с ведущими организациями, объединяющими профессионалов рынка недвижимости и смежных рынков и повышает привлекательность АПСНГ в среде профессионалов рынка недвижимости и строительства.</p>
        <h3>Основные цели Комитета:</h3>
    <ul>
        <li>Объединение потребностей членов АПСНГ с целью формирования законодательных инициатив и представления их органам исполнительной власти;</li>
        <li>Информирование членов АПСНГ об актуальных тенденциях рынка недвижимости и произошедших и планируемых изменениях в законодательстве;</li>
        <li className='pb-20'>Проведение встреч и семинаров для членов АПСНГ с целью обсуждения актуальных вопросов, связанных с созданием, приобретением и эксплуатацией объектов недвижимости с участием ведущих профессионалов рынка;</li>
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
              <p>{person.title_2}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default Real_Estate_Committee;
