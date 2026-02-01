import { useState } from "react";
import './App.css';
import { works } from './works.js';

function Section(props) {
  return (
    <section className={props.className}>
      {/* <h2>{props.title}</h2> */}
      {props.children}
    </section>
  );
}

function App() {
  const [showWorks, setShowWorks] = useState(true);
  const [selectedWorkId, setSelectedWorkId] = useState(null);

  return (
    <>
      <div className="worksButton">
        <button onClick={() => { setShowWorks(!showWorks) }}>
          {showWorks ? "Worksを閉じる" : "Worksを表示する"}
        </button>
        {selectedWorkId !== null && (
          <button onClick={() => setSelectedWorkId(null)}>
            一覧に戻る
          </button>
        )}
      </div>

      {
        showWorks && (
          <Section className="works">
            {works.map((work) => (

              selectedWorkId === null  ? (

                <article key={work.id} className="workCard">
                  <h3 className="workTitle" onClick={() => setSelectedWorkId(work.id)}>
                    {work.title}
                  </h3>
                </article>
              ) : selectedWorkId === work.id ? (

              <div key={work.id} className="workDetail">
                <img src="/images/LP1_sp.png" alt={work.title} className="workImage" />
                <div className="workInfo">
                  <h3 className="workTitle" onClick={() => setSelectedWorkId(work.id)}>
                    {work.title}
                  </h3>
                  {work.subCategories.map((subcategory) => (
                    <div key={subcategory.label}>
                      <h4 className="category">{subcategory.label}</h4>
                      <ul>
                        {subcategory.descriptions.map((description) => (
                          <li key={description}>{description}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  </div>
              </div>
            ) : null
            ))}
          </Section >
        )
      }
    </>
  );
}
export default App;