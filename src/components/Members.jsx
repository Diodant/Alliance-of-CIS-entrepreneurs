import React from "react";
import Breadcrumb from "./Breadcrumb";
import data from "./data";


const Members = () => {
  return (
    <>
    <Breadcrumb currentPage='Члены Ассоциации' />
    <div className="members-container wrapper">
        {Object.entries(data).map(([year, members]) => (
          <div key={year} className="year-block">
            <h2>{year}</h2>
            <table className="members-table">
              <thead>
                <tr>
                  <th>ФИО</th>
                  <th>Страна</th>
                  <th>Компания</th>
                  <th>Достижения</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.country}</td>
                    <td>{member.company}</td>
                    <td>{member.achievements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default Members;
