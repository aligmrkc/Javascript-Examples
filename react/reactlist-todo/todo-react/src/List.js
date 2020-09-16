import React, { Component } from 'react'
import './List.css'
import PropTypes from 'prop-types';

  class List extends Component {
      static propTypes=
      {
          contacts:PropTypes.array.isRequired
      };
    render() {
        return (
            <div className={"listArea"}>
                <input name="filter" id="filter" placeholder="Adding Filter"></input>
                <ul className={"list"}>
                    {
                        this.props.contacts.map(contact =>             
                    <li key={contact.phone}>
                        <span className={"name"}>contact.name</span>
                        <span className={"phone"}>contact.phone</span>
                        <span className={"clearfix"}></span>
                    </li>

                    )
                    
                    }          
                </ul>
            </div>
        )
    }
}

export default List;