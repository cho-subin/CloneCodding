import React from "react";
import '../css/Main.css'
import Banner from "./elements/Banner";
import ProductCard from "./elements/ProductCard";
import { useNavigate } from "react-router-dom";

function Main() {

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
