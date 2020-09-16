import React, { Component } from 'react'

 class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input name="name" id="id" placeholder="Bİr isim giriniz"></input>
                    <br/>
                    <input name="phone" id="phone" placeholder="Bİr telefon giriniz"></input>
                        <button>Ekle</button>
                </form>
            </div>
        )
    }
}
export default Form;