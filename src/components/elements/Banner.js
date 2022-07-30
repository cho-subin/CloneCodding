import React from "react";
import '../../css/Banner.css';

function Banner() {

  return (
    <div className="main_banner_area">
            <div className="banner_wrap">
                <div className="banner_content">
                    <div className="banner_item">
                        <img src="images/pc_img_1583112495.jpg"/>
                    </div>
                    <div className="banner_item">
                        <img src="images/pc_img_1596164134.jpg"/>
                    </div>
                    <div className="banner_item">
                        <img src="images/pc_img_1620696108.jpg"/>
                    </div>
                    <div className="banner_item">
                        <img src="images/pc_img_1621561009.jpg"/>
                    </div>
                    <div className="banner_item">
                        <img src="images/pc_img_1622450977.jpg"/>
                    </div>
                </div>
            </div>
            <div className="banner_buttons">
                <button id="banner_prev">
                    <img src="images/ico_prev1_x1.png"/>
                </button>
                <button id="banner_next">
                    <img src="images/ico_next1_x1.png"/>
                </button>
            </div>
        </div>
  );
}
export default Banner;