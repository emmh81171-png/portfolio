import { useState } from "react";
import './App.css';
import { works } from './works.js';
import { skills } from './skills.js';

function Section(props) {
  return (
    <section className={props.className}>
      {props.children}
    </section>
  );
}

function App() {
  const [showWorks, setShowWorks] = useState(true);
  const [selectedWorkId, setSelectedWorkId] = useState(null);
  const [selectedTabId, setSelectedTabId] = useState("top");
  const selectedWork = works.find(work => work.id === selectedWorkId) || null;
  let imageSrc = null;
  if (selectedWork)
    if (selectedWork.tabs) {
      const selectedTab = selectedWork.tabs.find(tab => tab.id === selectedTabId);
      imageSrc = selectedTab?.sp;
    } else {
      imageSrc = selectedWork.image;
    }
  return (
    <>
      <Section className="about">
        <div className="avoutInner">

          <div className="aboutTop">
            <div className="aboutImage">
              <img src="/images/profile.jpg" alt="Hachiya Hiiro" />
            </div>

            <div className="aboutRight">
              <div className="aboutNames">
                <p className="aboutEnName">Hachiya Hiiro</p>
                <h2 className="aboutJaName">八谷 飛一呂</h2>
              </div>

              <p className="aboutText">
                営業・コンサル・マネジメントを軸に、<br />
                Web開発・業務改善・データベース構築を行っています。<br />
                実務を通じてフロントエンド・自動化・データベース領域のスキルを習得中です。
              </p>
            </div>
          </div>

        </div>
      </Section>


      <div className="worksButton">
        <button onClick={() => {
          setShowWorks(!showWorks)
          setSelectedWorkId(null);
          setSelectedTabId("top");
        }}>
          {showWorks ? "Worksを閉じる" : "Worksを表示する"}
        </button>
        {selectedWorkId !== null && (
          <button onClick={() => {
            setSelectedWorkId(null)
            setSelectedTabId("top");
          }
          }>
            一覧に戻る
          </button>
        )}
      </div>

      {
        showWorks && (
          <Section className="works">
            {works.map((work) => (

              selectedWorkId === null ? (

                <article key={work.id} className="workCard">
                  <h3 className="workTitle" onClick={() => {
                    setSelectedWorkId(work.id);
                    setSelectedTabId("top");
                  }}>
                    {work.title}
                  </h3>
                </article>
              ) : selectedWorkId === work.id ? (

                <div key={work.id} className="workDetailPage">

                  <h2 className="worksTitleDetail">{work.title}</h2>

                  <div className="workDetail">
                    <img src={imageSrc} alt={work.title} className="workImage" />
                    <div className="workInfo">
                      {work.tabs && (
                        <div className="tabs">
                          {work.tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setSelectedTabId(tab.id)}>
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      )}
                      {work.subCategories.map((subcategory) => (
                        <div key={subcategory.label}>
                          <h4 className="category">{subcategory.label}</h4>
                          <ul className="categoryDetail">
                            {subcategory.descriptions.map((description) => (
                              <li key={description}>{description}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </Section >
        )
      }

      <Section className="skills">
        {skills.map((group) => (
          <div key={group.title} className="skillGroup">
            <h3 className="skillTitle">{group.title}</h3>
            <div className="skillIcons">
              {group.items.map((item) => (
                <img
                  key={item.id}
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  className="skillIcon"
                />
              ))}
            </div>
          </div>
        ))}
      </Section >

    </>
  );
}
export default App;