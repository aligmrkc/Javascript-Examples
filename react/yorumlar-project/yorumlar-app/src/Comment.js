import React from 'react'
import faker from 'faker'
const Comment = (props) => {
    const {name,star,timeAgo,comment}=props;
    return (
        <div className="ui comments">
        <div className="comment">
                <img alt="avatar" src={faker.image.avatar()}/>
            <div className="content">
                <a className="author">{name}</a>
                <div className="metadata">
                    <div className="date">{timeAgo}</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {star}
                    </div>
                </div>
                <div className="text">
                   {comment}
                </div>
            </div>
        </div>
    </div>
    )
}

export  default Comment;