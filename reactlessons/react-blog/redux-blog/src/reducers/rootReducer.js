const initState=
{
    posts:[
        {id: '1',title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}
       
        ,{id: '2',title: 'ali aut facere repellat provident occaecati excepturi optio reprehenderit',body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}
        
        ,{id: '3',title: 'ahmet aut facere repellat provident occaecati excepturi optio reprehenderit2', body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}

    
    
    ]
}



const rootReducer=(state=initState,action)=>{
    return state;
}

export default rootReducer;