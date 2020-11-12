import React,{useState,useEffect} from "react";
import{ connect } from "react-redux";

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props

)} {
    const {product,setProduct}=useState({...props.product});
    useEffect(()=>{
        if(categories.length===0){
            getCategories();
        }
        setProduct({...props.product})
    },[props.product])

    function handleChange(evet){
        const{name.value}=event.target;
        setProduct(previousProduct=>({
            ...previousProduct,
            [name]:name==="categoryId"?parseInt(value,10):value
        }))
    }

    function handleSave(event){
        event.preventDefault();
        saveProduct(product).then(()=>{
            history.push("/")
        })
    }
}


const mapDispatchToProps={
    getCategories,saveProducts
}

export default connect()(AddOrUpdateProduct)

