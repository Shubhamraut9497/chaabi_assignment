import React, { useState } from 'react';

function Radio({ courseType, info ,selectedCourse, handleCourseChange}) {
    const isSelected = selectedCourse === courseType;

  return (
    <div className="monthly__training__courses">
      <div className="monthly__training__radio">
        <input
          type="radio"
          className="radio"
          checked={isSelected}
          onChange={() => handleCourseChange(courseType)}
        />
        <div className="radio__types">
          <p>{courseType}</p>
          <div>{info}</div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
