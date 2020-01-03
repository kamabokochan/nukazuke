import "../css/styles.styl"

const linkList = [
  {
    name: 'github',
    url: 'https://github.com/kamabokochan'
  },
  {
    name: 'はてなブログ',
    url: 'https://h-workfront.hatenablog.com/'
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/kamabokochan'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kamabokochanu'
  }
]

export default () =>
  <div className="root">
    <div className="profile-image">
      <img src="kamabokochan.png" alt="" />
    </div>
    <ul className="link-list">
      {
        linkList.map((list, index) => <li key={index}><a href={list.url}>{list.name}</a></li>)
      }
    </ul>
  </div>