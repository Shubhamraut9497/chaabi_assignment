import React, { useState } from "react";
import Radio from "./Radio";

function MonthlyTrainingActivity() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleCourseChange = (courseType) => {
    setSelectedCourse(courseType);
  };
  return (
    <div className="monthly__training">
      <div className="monthly__training__heading">
        <h5>Monthly Training Activity</h5>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M7.96944 3.73266L7.96944 13.9275"
              stroke="#018E42"
              stroke-width="1.63117"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.87494 7.84442L7.96917 3.73252L12.0641 7.84442"
              stroke="#018E42"
              stroke-width="1.63117"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          16% more enrollees this month
        </p>
        <Radio
          courseType={"course a"}
          info={"23 Workers Took This Course This Week"}
          selectedCourse={selectedCourse}
          handleCourseChange={handleCourseChange}
        />
        <Radio
          courseType={"course b"}
          info={"25 Workers Took This Course This Week"}
          selectedCourse={selectedCourse}
          handleCourseChange={handleCourseChange}
        />
        <Radio
          courseType={"course c"}
          info={"23 Workers Took This Course This Week"}
          selectedCourse={selectedCourse}
          handleCourseChange={handleCourseChange}
        />
        <Radio
          courseType={"course d"}
          info={"23 Workers Took This Course This Week"}
          selectedCourse={selectedCourse}
          handleCourseChange={handleCourseChange}
        />
      </div>
    </div>
  );
}

export default MonthlyTrainingActivity;
