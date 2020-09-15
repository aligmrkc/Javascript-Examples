import React from 'react'

 const Card = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
                <div className="header"></div>
                <div className="description">
                <p></p>
                </div>
            </div>
            <div className="extra content">
                <span className="left floated like">
                Like
                </span>
                <span className="right floated star">
               
                Favorite
                </span>
            </div>
        </div>
    )
}

export default Card
