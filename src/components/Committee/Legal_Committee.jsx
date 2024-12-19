import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Legal_Committee_1 from "../../images/Committee/Legal_Committee_1.png";
import Legal_Committee_2 from "../../images/Committee/Legal_Committee_2.png";
import Legal_Committee_3 from "../../images/Committee/Legal_Committee_3.png";
import Legal_Committee_4 from "../../images/Committee/Legal_Committee_4.png";


const Data = [
  {
    name: 'Анжелика Бурдейная',
    title: 'Старший менеджер – руководитель юридической практики Б1',
    photo: Legal_Committee_1 
  },
  {
    name: 'Мария Винокурова',
    title: 'Старший юрист в области корпоративного и коммерческого права, Denuo',
    photo: Legal_Committee_2
  },
  {
    name: 'Игорь Горохов',
    title: 'Управляющий юрист CLS',
    photo: Legal_Committee_3
  },
  {
    name: 'Юлия Талагаева',
    title: 'Старший юрист Forte Tax & Law',
    photo: Legal_Committee_4
  },

];

const Legal_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Юридический комитет' />
    <div className="cochairs-container wrapper">
        <p>Деятельность Юридического Комитета АПСНГ подчинена основной цели – совершенствование законодательной базы с целью создания благоприятных условий для ведения бизнеса на Северо-Западе России.</p>
      <h3>Задачи Юридического комитета АПСНГ:</h3>
      <ul>
        <li>Выявление проблем в сфере производства, торговли и налогового законодательства, с которыми сталкиваются компании на Северо-Западе России и содействие их разрешению от имени членов АПСНГ;</li>
        <li>Законодательные инициативы и рекомендации;</li>
        <li>Взаимодействие с местными и федеральными органами власти по продвижению предложений и инициатив АПСНГ;</li>
        <li className='pb-20'>Взаимодействие с другими бизнес-ассоциациями для усиления значимости мнения местного интернационального бизнес-сообщества.</li>
      </ul>
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
      <p className='pt-50'>Мы открыты для предложений и готовы обсуждать вопросы, волнующие членов ассоциации, и содействовать улучшению делового климата на Северо-Западе России.</p>
    </div>
    </>
  );
};

export default Legal_Committee;
