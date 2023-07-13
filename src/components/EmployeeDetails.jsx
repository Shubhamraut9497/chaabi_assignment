import React from "react";

function EmployeeDetails({ infoHeading, num, percent, randomNum, image }) {
  return (
    <div className="employee_details__">
      <div className="employee__details">
        <h5 className="employee__details__info">{infoHeading}</h5>
        <div className="employee_details__data">
          <div>
            <h3 className="employee_details__num">{num}</h3>
            <div className="employee__innerDetail">
                <p className="employee__percent">{percent}</p>
                <p className="employee__random">{randomNum}</p>
            </div>
          </div>
          <div className="employee__details__img">{image}</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
