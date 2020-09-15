import React from 'react'
import faker from 'faker';

 const Comment = (props) => {
    const {name,timeAgo,star,comment}=props;

    return (
     <div className="comment">
            <a className="avatar" href="/">
                <img alt src={faker.image.avatar()}/>
            </a>
        <div className="content">
            <a className="author" href="/">{name}</a>
            <div className="metadata">
            <div className="date">{timeAgo} days</div>
            <div className="rating">
    <i className="star icon">{star}</i>
                
            </div>
            </div>
            <div className="text">
            {comment}
            </div>
      </div>
    </div>
    )
}

export default Comment;