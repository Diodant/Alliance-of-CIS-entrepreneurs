import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Finance_Committee_1 from "../../images/Committee/Finance_Committee_1.png";
import Finance_Committee_2 from "../../images/Committee/Finance_Committee_2.png";
import Finance_Committee_3 from "../../images/Committee/Finance_Committee_3.png";
import Finance_Committee_4 from "../../images/Committee/Finance_Committee_4.png";


const Data = [
  {
    name: 'Антон Кабаков',
    title: 'Партнёр',
    title_2: 'Forte Tax & Law',
    photo: Finance_Committee_1 
  },
  {
    name: 'Мария Стригалёва',
    title: 'Руководитель юридической и налоговой практики BLCONS GROUP',
    title_2: 'Генеральный директор аудиторской компании BLCONS GROUP AUDIT DEPARTMENT',
    photo: Finance_Committee_2
  },
  {
    name: 'Ольга Воробьёва',
    title: 'Руководитель отдела юридической практики',
    title_2: 'EMERGING MARKETS GROUP',
    photo: Finance_Committee_3
  },
  {
    name: 'Алексадр Симонов',
    title: 'Старший налоговый менеджер',
    title_2: 'Marillion',
    photo: Finance_Committee_4
  },

];

const Finance_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Финансовый комитет' />
    <div className="cochairs-container wrapper">
    <p>Финансовый комитет СПИБА объединяет профессионалов в области финансов, налогового и бухгалтерского учета. Цель работы Комитета – создание площадки для обмена информацией между коллегами и демонстрация того, что предприятия могут и должны успешно работать, соблюдая при этом все требования Российского законодательства.</p>
      <h3>Сфера деятельности Комитета:</h3>
      <ul>
        <li>Финансовый менеджмент;</li>
        <li>Применение налогового законодательства;</li>
        <li>Пути оптимизации бизнес-процессов предприятия;</li>
        <li>Финансовое состояние экономики России;</li>
        <li>Бухгалтерский учет, Международные стандарты финансовой отчетности;</li>
        <li className='pb-20'>Валютное законодательство.</li>
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
      
    </div>
    </>
  );
};

export default Finance_Committee;
