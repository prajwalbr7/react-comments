import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuid4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    arrayList: [],
    countInput: 0,
    name: '',
    comment: '',
  }

  onAddComments = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const FirstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const GenObject = {
      id: uuid4(),
      firstNames: FirstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isFavourite: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, GenObject],
      name: '',
      comment: '',
      countInput: prevState.countInput + 1,
    }))
  }

  onChangeInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({comment: event.target.value})
  }

  toggleFavour = id => {
    this.setState(prevData => ({
      arrayList: prevData.arrayList.map(eachData => {
        if (eachData.id === id) {
          return {...eachData, isFavorite: !eachData.isFavorite}
        }
        return eachData
      }),
    }))
  }

  deleteList = id => {
    const {arrayList} = this.state
    const filterData = arrayList.filter(eachItem => eachItem.id !== id)
    this.setState(prevState => ({
      arrayList: filterData,
      countInput: prevState.countInput - 1,
    }))
  }

  render() {
    const {name, comment, countInput, arrayList} = this.state
    return (
      <div className="container-Main">
        <div className="container-sub">
          <h1 className="heading-1">Comments</h1>
          <div className="form-img-cont-row">
            <form className="form-style" onSubmit={this.onAddComments}>
              <p className="label-style" htmlFor="userInput">
                Say something about 4.0 Technologies
              </p>
              <br />
              <input
                className="input-style"
                placeholder="Your Name"
                onChange={this.onChangeInput}
                value={name}
              />
              <br />
              <textarea
                className="textarea-style"
                rows="4"
                cols="70"
                placeholder="Your Comment"
                onChange={this.onChangeTextArea}
                value={comment}
              />
              <br />
              <button className="button-stye" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="img-comment"
              alt="comments"
            />
          </div>
          <hr className="hr-line" />
          <p className="para-style">
            <span className="spam-style">{countInput}</span> Comments
          </p>
          <ul className="ul-style">
            {arrayList.map(Item => (
              <CommentItem
                key={Item.id}
                arrayList={Item}
                toggleFavour={this.toggleFavour}
                deleteList={this.deleteList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
