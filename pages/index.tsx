import "../css/styles.styl"
import linkList from "../public/link.js"

export default () =>
  <div className="root">
    <div className="profile-image">
      <img src="kamabokochan.png" alt="" />
    </div>
    <h2>LINK</h2>
    <ul className="link-list">
      {
        linkList.map((list, index) => <li key={index}><a href={list.url}>{list.name}</a></li>)
      }
    </ul>
  </div>