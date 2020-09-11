import React from 'react';


const User=({state,name,method})=>{
    return(
        <div className="card">
         <h1> Adı:{name}</h1>
            <h3>Durumu: <span className={state}>{state}</span> </h3>
         <button onClick={method}>Durum Değiştir</button>
        
        </div>
    )
}

export default User;