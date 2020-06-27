import "../css/styles.styl"
import linkList from "../public/link.js"

export default () => (
  <div className="root">
    <div className="wrap">
      <div className="icon-wrap">
        <img src="icon.png" alt="アイコン" width="120" />
      </div>
      <ul className="social-list">
        {linkList.map((list, index) => {
          return (
            <li key={index}>
              <a href={list.url}>
                <img src={list.icon} alt={list.name} width="40" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);