import React from "react";
import './../../css/Header.css'

function Header() {

    return (
        <div className="header">
            <div className="header_top">
                <div className="header_top_container">
                    <p>지금 가입하고 인기상품 <b>100원</b>에 받아가세요! <img src="/images/ico_more_link_x1.png" /></p>
                    <a href="">
                        <img src="/images/ico_close_999_32x32.png" />
                    </a>
                </div>
                <div className="header_bottom">
                    <div className="hb_area1">
                        <a href="">
                            <img src="/images/delivery_200323.gif" />
                        </a>
                        <div className="user_menu">
                            <div className="signup">
                                <a href="">회원가입</a>
                            </div>
                            <div className="login">
                                <a href="">로그인</a>
                            </div>
                        </div>
                    </div>
                    <div className="hb_area2">
                        <a href="" id="logo">
                            <img src="/images/logo_x2.png" />
                        </a>
                    </div>
                    <div className="hb_area3">
                        <div className="main_menu">
                            <ul>
                            <li>
                                <img src="/images/ico_gnb_all_off.png" className="ham_btn"/>
                                <a href="#" id="all_cate">전체 카테고리</a>
                            </li>
                            <li>
                                <a href="">신상품</a>
                            </li>
                            <li>
                                <a href="">베스트</a>
                            </li>
                            <li>
                                <a href="">알뜰쇼핑</a>
                            </li>
                            <li>
                                <a href="">특가/혜택</a>
                            </li>
                        </ul> 
                        </div>
                        <div className="search_menu">
                            <div className="search_box">
                                <input type="text">
                                </input>
                                <a href="">
                                    <img src="/images/ico_search_x2.png" />
                                </a>
                            </div>
                            <a href="">
                                <img src="/images/ico_cart.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;