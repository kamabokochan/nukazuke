import "../css/styles.styl"
import linkList from "../public/link.js"

export default () => (
  <div className="root">
    <div className="wrap">
      <div className="icon-wrap">
        <a href="/"><img src="icon.png" alt="アイコン" width="120" /></a>
      </div>
      <ul className="social-list">
        {linkList.map((list, index) => {
          return (
            <li key={index}>
              <a href={list.url}>
                <img src={list.icon} alt={list.name} width="40" />
              </a>
              <p className="social-name">{list.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);