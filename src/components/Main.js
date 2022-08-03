import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import '../css/Main.css'
import Banner from "./elements/Banner";
import ProductCard from "./elements/ProductCard";
import {productAction} from '../redux/actions/productAction';

function Main() {
    const dispatch = useDispatch();

    // 통신할때 쓰기!
  useEffect(()=>{
    dispatch(productAction.getProducts()) //middleware로 쓰기
    // console.log(data)
  },[])

    return (
        <div className="main">
            <Banner />
            <div className="product_grid_area">
                <h1>이 상품 어때요?</h1>
                <ProductCard/>
            </div>
        </div>
    );
}
export default Main;
