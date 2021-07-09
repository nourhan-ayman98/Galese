import './UsersInfo.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
export default function UsersInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Patients</span>
        <div className="featuredCommersContainer">
          <span className="featuredMoney">4500</span>
          <span className="featuredMoneyRate">
            -10% <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nurses</span>
        <div className="featuredCommersContainer">
          <span className="featuredMoney">600</span>
          <span className="featuredMoneyRate">
            +2% <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sitters</span>
        <div className="featuredCommersContainer">
          <span className="featuredMoney">200</span>
          <span className="featuredMoneyRate">
            -1% <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}