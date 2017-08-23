import '../css/Comment.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    let myComponent;
    let title;
    let key;
    if(this.props.comments.length === 0){
      myComponent = null;
      title = null;
      key = `key${Date.now}`;
    } else {
      key = this.props.comments[0].data.children[0].data.id;
      myComponent = 
        this.props.comments[1].data.children.map(comment => {
          if(comment.data.body !== "" || comment.data.body !=="[removed]"){ 
            return(
            <tr key={comment.data.id}>
              <td>
                <p className="score">
                  {comment.data.score}
                </p>
              </td>
              <td>
                <p className="author">
                  {comment.data.body}<br/>
                  <br className="brTop"/>
                  <span className="italicText">Posted by <a href={`http://reddit.com/u/${comment.data.author}`}> {comment.data.author}</a></span>
               </p>
              </td>
            </tr>
          )}
        else {
          return
        }});
      title = this.props.comments[0].data.children[0].data.title;
    }
    return(
      <div key={key}>
        <table>
          <tbody>
            <tr>
              <td>
                <h1>
                  <Link className="backLink" to={`/r/${this.props.subId}`}>
                    ←
                  </Link>
                </h1>
              </td>
              <td>
                <h2>
                  {title}
                </h2>
              </td>
            </tr>
            {myComponent}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Comment;