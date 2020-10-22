import React from 'react'

const Rainbow=(WrappedComponent)=>{
    //Renk değiştirme için kullancaz dizi olarak gelicek renkler

    const colours=['red','pink','blue','green','orange','darkblue'];
    const randomColor=colours[Math.floor(Math.random()*6)]

    const className=randomColor+'-text';
    return(props)=>(
        <div className={className}>
            <WrappedComponent{...props}/>
        </div>
    )



}

export default Rainbow;