import React from 'react';


const User=({state,name,method})=>{
    return(
        <div className="card bg-light mb-3">
           <div className="card-body">
            <h1 className="card-title"> Adı:{name}</h1>
            <h3 className="card-subtitle">Durumu: <span className={state}>{state}</span> </h3>
            <button onClick={method}>Durum Değiştir</button>
           
           </div>
        
        </div>
    )
}

export default User;