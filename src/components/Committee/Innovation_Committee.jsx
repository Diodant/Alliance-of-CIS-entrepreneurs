import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Innovation_Committee_1 from "../../images/Committee/Innovation_Committee_1.png";
import Innovation_Committee_2 from "../../images/Committee/Innovation_Committee_2.png";
import Innovation_Committee_3 from "../../images/Committee/Innovation_Committee_3.png";
import Innovation_Committee_4 from "../../images/Committee/Innovation_Committee_4.png";


const Data = [
  {
    name: 'Елена Попова',
    title: 'Руководитель Центра',
    title_2: '5G МТС',
    photo: Innovation_Committee_1 
  },
  {
    name: 'Ия Кузнецова',
    title: 'Руководитель Северо-Западного филиала',
    title_2: 'GMCS',
    photo: Innovation_Committee_2
  },
  {
    name: 'Светлана Кузнецова',
    title: 'Финансовый директор',
    title_2: 'Vileda Professional',
    photo: Innovation_Committee_3
  },
  {
    name: 'Рузанна Ахобекова',
    title: 'Советник практики в области ИС, ИТ и телекоммуникаций',
    title_2: 'Nextons',
    photo: Innovation_Committee_4
  },

];

const Innovation_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Комитет по инновациям' />
    <div className="cochairs-container wrapper">

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
      
    </div>
    </>
  );
};

export default Innovation_Committee;
