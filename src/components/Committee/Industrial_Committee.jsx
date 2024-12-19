import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Industrial_Committee_1 from "../../images/Committee/Industrial_Committee_1.jpg";
import Industrial_Committee_2 from "../../images/Committee/Industrial_Committee_2.jpg";
import Industrial_Committee_3 from "../../images/Committee/Industrial_Committee_3.jpg";
import Industrial_Committee_4 from "../../images/Committee/Industrial_Committee_4.jpg";


const Data = [
  {
    name: 'Пээтер Кехва',
    title: 'Директор по охране труда и экологии',
    title_2: 'Kаппа Рус',
    photo: Industrial_Committee_1 
  },
  {
    name: 'Роман Ишмухаметов',
    title: 'Старший юрист',
    title_2: 'Melling, Voitishkin & Partners',
    photo: Industrial_Committee_2
  },
  {
    name: 'Ольга Некрасова',
    title: 'Коммерческий директор',
    title_2: 'Алерс Россия',
    photo: Industrial_Committee_3
  },
  {
    name: 'Дарья Холомина',
    title: 'Начальник отдела охраны труда',
    title_2: 'ПАО МТС',
    photo: Industrial_Committee_4
  },

];

const Industrial_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Промышленный комитет' />
    <div className="cochairs-container wrapper">
      <h3>Цели комитета:</h3>
      <ul>
        <li>идентифицировать, оценивать и анализировать основные тенденции и проблемы в области экологии, охраны труда и безопасности, которые могут повлиять на деятельности предприятий в России;</li>
        <li>продвигать эффективные стандарты работы в области экологии, охраны труда и безопасности среди компаний, работающих в России;</li>
        <li>помогать членам ассоциации в выполнении их обязанностей относительно соблюдения техники безопасности, охраны окружающей среды и здоровья в соответствии с законодательством;</li>
        <li>активно участвовать в развитии соответствующих законов, инструкций и стандартов касающихся проблем EHS;</li>
        <li className='pb-20'>поддерживать свободный и открытый информационный обмен.</li>
      </ul>
      <p>Заседания комитета проходят один раз в месяц. дополнительные встречи могут быть организованы по инициативе членов ассоциации.</p>
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

export default Industrial_Committee;
