import React from 'react';
import Breadcrumb from "../Breadcrumb";
import Executive_Committe_1 from "../../images/Committee/Executive_Committee_1.png";
import Executive_Committe_2 from "../../images/Committee/Executive_Committee_2.png";
import Executive_Committe_3 from "../../images/Committee/Executive_Committee_3.png";
import Executive_Committe_4 from "../../images/Committee/Executive_Committee_4.png";
import Executive_Committe_5 from "../../images/Committee/Executive_Committee_5.png";
import Executive_Committe_6 from "../../images/Committee/Executive_Committee_6.png";
import Executive_Committe_7 from "../../images/Committee/Executive_Committee_7.png";
import Executive_Committe_8 from "../../images/Committee/Executive_Committee_8.png";
import Executive_Committe_9 from "../../images/Committee/Executive_Committee_9.png";


const Executive_CommitteeData = [
  {
    name: 'Стефан Ван Доорслаер',
    title: 'Председатель Исполнительного и член Совета Директоров',
    title_2: 'Astros Logistics',
    photo: Executive_Committe_1 
  },
  {
    name: 'Виктория Гуринович',
    title: 'Директор производственного филиала и директор по логистике',
    title_2: 'Groupe SEB Vostok',
    photo: Executive_Committe_2  
  },
  {
    name: 'Станислав Смирнов',
    title: 'Вице-Президент',
    title_2: 'Raiffeisenbank',
    photo: Executive_Committe_3 
  },
  {
    name: 'Олег Боков',
    title: 'Операционный директор',
    title_2: 'Объединённые Пивоварни — Холдинг',
    photo: Executive_Committe_4  
  },
  {
    name: 'Ирина Киуру',
    title: 'Директор по стратегическому маркетингу и развитию бизнеса',
    title_2: 'Lindaily',
    photo: Executive_Committe_5  
  },
  {
    name: 'Амазасп Тигранян',
    title: 'Директор по производству и операциям',
    title_2: 'ITMS, St. Petersburg',
    photo: Executive_Committe_6 
  },
  {
    name: 'Елена Бергер',
    title: 'Head of Legal Russia',
    title_2: 'KraftHeinz',
    photo: Executive_Committe_7  
  },
  {
    name: 'Евгений Дубенский',
    title: 'Заместитель ген. директора, Zetta Group',
    title_2: 'Президент Medexpress',
    photo: Executive_Committe_8 
  },
  {
    name: 'Фернандо Рохо',
    title: 'Генеральный менеджер, Corinthia Hotel',
    title_2: 'St.Petersburg',
    photo: Executive_Committe_9  
  },
];

const Executive_Committee = () => {
  return (
    <>
    <Breadcrumb currentPage='Исполнительный комитет' />
    <div className="cochairs-container wrapper">
        <p>Исполнительный Комитет осуществляет стратегическое управление деятельностью Ассоциации и принимает административные решения. Комитет состоит из девяти человек, представляющих компании, входящие в АПСНГ. Члены Комитета выбираются общим голосованием компаний на два года и собираются обычно раз в месяц для обсуждения действий Ассоциации и принятия решений (включая бюджет и расходы). Члены Исполнительного Комитета могут возглавлять другие независимые комитеты внутри Ассоциации или руководить отдельным направлением работ. Члены Исполнительного Комитета не получают финансового вознаграждения за работу, но их вклад в деятельность Ассоциации высоко оценивается всеми членами АПСНГ.</p>
      <h1>Сопредседатели Комитета:</h1>
      <div className="cochairs-table">
        {Executive_CommitteeData.map((person, index) => (
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

export default Executive_Committee;
