// Write your code here
import './index.css'

const CommentItem = props => {
  const {arrayList, toggleFavour, deleteList} = props
  const {
    id,
    firstNames,
    names,
    comments,
    newClass,
    dates,
    isFavorite,
  } = arrayList
  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const toggle = () => {
    toggleFavour(id)
  }
  const addClass = isFavorite ? 'blue-color' : ''
  const deleteItem = () => {
    deleteList(id)
  }
  return (
    <li className="list-style">
      <div className="list-sub-Cont">
        <p className={`list-para-style ${newClass}`}>{firstNames}</p>
        <div className="para-head-time-container">
          <div className="heading-time-container">
            <h1 className="list-heading-style">{names}</h1>
            <p className="date-para-style">{dates}</p>
          </div>
          <p className="list-paragraph-style">{comments}</p>
        </div>
      </div>
      <div className="like-delete-cont">
        <div className="icon-cont">
          <button className="icon-button" type="button" onClick={toggle}>
            <img src={imgUrl} className="" alt="Like" />
          </button>
          <p className={`icon-style ${addClass}`}>Like</p>
        </div>
        <button
          className="button-list-style"
          type="button"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className=""
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
