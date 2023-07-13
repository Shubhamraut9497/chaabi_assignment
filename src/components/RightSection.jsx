import React from "react";
import HeaderSection from "./HeaderSection";
import EmployeeDetails from "./EmployeeDetails";
import {
  AllCharts,
  AllChart2,
  AllChart3,
  AllChart4,
} from "../chartData/AllCharts";
import WorkersPieChart from "../chartData/WorkersPieChart";
import WorkersGraphChart from "../chartData/WorkersGraphChart";
import MonthlyTrainingActivity from "../chartData/MonthlyTrainingActivity";
import QuizPassing from "../chartData/QuizPassing";
import DailyTraining from "../chartData/DailyTraining";
function RightSection() {
  return (
    <div className="right_section">
      <HeaderSection />
      <div className="right__section__component">
        <div>
          <EmployeeDetails
            infoHeading={"In Training Workers"}
            num={"3354"}
            percent={"20%"}
            randomNum={"234"}
            image={<AllCharts />}
          />
        </div>
        <div>
          <EmployeeDetails
            infoHeading={"Video-Watch-Time(hrs)"}
            num={"2433"}
            percent={"20%"}
            randomNum={"435"}
            image={<AllChart2 />}
          />
        </div>
        <div>
          <EmployeeDetails
            infoHeading={"% Workers Passing Quiz"}
            num={"95%"}
            percent={"20%"}
            randomNum={"245"}
            image={<AllChart3 />}
          />
        </div>
        <div>
          <EmployeeDetails
            infoHeading={"Avg. Days Taken"}
            num={"6"}
            percent={"20%"}
            randomNum={"3"}
            image={<AllChart4 />}
          />
        </div>
      </div>
      <div className="right__section__workers__info">
        <div className="Chapter__wise__status">
          <WorkersPieChart />
        </div>
        <div className="active__workers__in__training">
          <WorkersGraphChart />
        </div>
      </div>
      <div className="training__activity">
        <div className="monthly__training__activity">
          <MonthlyTrainingActivity/>
        </div>
        <div className="quiz__passsing">
          <QuizPassing/>
        </div>
        <div className="daily__training__completions">
          <DailyTraining/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
