import React, { useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import data from "./data";

const Members = () => {
  useEffect(() => {
    const rules = [
      {
        re: /\bVadim\s+Prenko\b/g,
        to: "Vadym Prenko",
      },
    ];

    function isBrowserTranslated() {
      const html = document.documentElement;

      return (
        html.classList.contains("translated-ltr") ||
        html.classList.contains("translated-rtl") ||
        document.querySelector("iframe.goog-te-banner-frame")
      );
    }

    function replaceText(root) {
      if (!isBrowserTranslated()) return;

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node;

      while ((node = walker.nextNode())) {
        let text = node.nodeValue;

        rules.forEach(({ re, to }) => {
          text = text.replace(re, to);
        });

        if (text !== node.nodeValue) {
          node.nodeValue = text;
        }
      }
    }

    const run = () => replaceText(document.body);

    run();

    const observer = new MutationObserver(run);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const interval = setInterval(run, 600);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Breadcrumb currentPage="Члены Ассоциации" />

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
                  <tr key={`${year}-${index}`}>
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