import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Quality_of_Life_Committee_1 from "../../images/Committee/Quality_of_Life_Committee_1.png";



const Data = [
  {
    name: 'Ольга Чернышова',
    title: 'Управляющий партнер BC Communications, бизнес-тренер, модератор, командный коуч ICF, health coach',
    photo: Quality_of_Life_Committee_1 
  },


];

const Quality_of_Life_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Комитет по качеству жизни' />
    <div className="cochairs-container wrapper">
        <p>Качество жизни напрямую зависит от состояния здоровья, коммуникаций в социуме, психологического и социального статуса, свободы деятельности и выбора, организованности досуга, уровня образования, доступа к культурному наследию, социальному, психологическому и профессиональному самоутверждению, психотипа и адекватности коммуникаций и взаимоотношений.</p>

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

export default Quality_of_Life_Committee;
