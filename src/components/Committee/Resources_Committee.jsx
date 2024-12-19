import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Resources_Committee_1 from "../../images/Committee/Resources_Committee_1.png";
import Resources_Committee_2 from "../../images/Committee/Resources_Committee_2.png";
import Resources_Committee_3 from "../../images/Committee/Resources_Committee_3.png";
import Resources_Committee_4 from "../../images/Committee/Resources_Committee_4.png";


const Data = [
  {
    name: 'Александр Коркин',
    title: 'Старший юрист, Меллинг, Войтишкин и Партнеры',
    photo: Resources_Committee_1 
  },
  {
    name: 'Наталья Фёдорова',
    title: 'Директор по организационному развитию и управлению персоналом в Lindaily',
    photo: Resources_Committee_2
  },
  {
    name: 'Анастасия Филяева',
    title: 'Старший юрист отдела претензионно-исковой работы, X5 Group',
    photo: Resources_Committee_3
  },
  {
    name: 'Надежда Чернова',
    title: 'Бизнес партнёр по трудовым отношениям и социальному партнёрству',
    photo: Resources_Committee_4
  },

];

const Resources_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Комитет по трудовым ресурсам' />
    <div className="cochairs-container wrapper">
    <p>В результате  проведенного среди членов АПСНГ опроса  по кругу задач из области управления персоналом, в 2003 году было решено создать Комитет АПСНГ по трудовым ресурсам.</p>
      <p>Комитет собирается раз в месяц на регулярной основе  для обсуждения различных вопросов работы с персоналом — рекрутмент, мотивация, образование и тренинги, трудовое законодательство и др., и по потребности — при подготовке мероприятий.  Мы будем рады обеспечить для профессионалов в области кадрового менеджмента возможности для обмена мнениями и опытом и для выработки совместных решений по актуальным  для этой сферы проблемам.</p>
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

export default Resources_Committee;
