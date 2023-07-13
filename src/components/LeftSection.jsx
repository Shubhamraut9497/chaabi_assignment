import React from "react";
import logo from "./logo.jpg";
import categoryImage from "./Category.jpg";
import HandleCategory from "../Icons/HandleCategory";
import NotSelectedOptions from "../Icons/NotSelectedOptions";
import Users from "../Icons/Users";
import Analytics from "../Icons/Analytics";

function LeftSection() {
  return (
    <div className="left_section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="left__section_options">
        <div className="left_section_options_types">
          <HandleCategory category_icon={categoryImage} type={"Dashboard"} />
        </div>
        <div className="left__section_not_selected_options">
            <NotSelectedOptions type="Trainings"/>
            <Users type={"Users"}/>
            <Analytics type={'Analytics'}/>
            <Analytics type={"My Account"}/>
            <Analytics type={"Support"}/>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
