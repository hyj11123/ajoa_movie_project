import React from "react";
import mockup from "../image/phone__mockup.png";

class screen04 extends React.Component {
  render() {
    return (
      <div className="screen04 screen">
        <div className="screen04__main">
          <div className="screen04__mockup">
            <img src={mockup}></img>
          </div>

          <div className="screen04__txt">
            <div className="screen04__txt1">즐거움 2배 기쁨도 2배!</div>
            <div className="screen04__txt2">무비 선물 받아가세요 ~</div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen04;
