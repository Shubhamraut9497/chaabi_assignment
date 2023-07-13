import React from "react";
import DonutChart from "react-donut-chart";
function QuizPassing() {
  return (
    <div className="quiz__passing">
      <h5>Quiz Passing %</h5>
      <div className="quiz__passing__chart">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="196"
            height="196"
            viewBox="0 0 196 196"
            fill="none"
          >
            <path
              d="M196 98C196 118.696 189.448 138.86 177.284 155.603C165.119 172.346 147.966 184.808 128.284 191.204C108.601 197.599 87.3989 197.599 67.7163 191.204C48.0336 184.808 30.8808 172.346 18.7163 155.603L50.4297 132.562C57.7285 142.608 68.0201 150.085 79.8297 153.922C91.6393 157.759 104.361 157.759 116.17 153.922C127.98 150.085 138.271 142.608 145.57 132.562C152.869 122.516 156.8 110.417 156.8 98H196Z"
              fill="#ED1C24"
            />
            <path
              d="M55.6038 186.355C40.7216 179.214 27.8843 168.429 18.2831 155.002L50.1698 132.201C55.9306 140.258 63.6329 146.728 72.5623 151.013L55.6038 186.355Z"
              fill="#ED1C24"
            />
            <path
              d="M67.3352 4.92116C82.074 0.0654353 97.7554 -1.22073 113.088 1.16852C128.422 3.55777 142.968 9.55412 155.531 18.6641C168.094 27.774 178.313 39.7371 185.349 53.5686C192.385 67.4002 196.035 82.7049 196 98.223L156.8 98.1338C156.821 88.8229 154.631 79.6401 150.409 71.3412C146.188 63.0422 140.056 55.8644 132.518 50.3984C124.981 44.9325 116.253 41.3347 107.053 39.9011C97.8532 38.4676 88.4444 39.2393 79.6011 42.1527L67.3352 4.92116Z"
              fill="#018E42"
            />
            <path
              d="M18.9606 155.938C9.81739 143.464 3.75606 129.004 1.27217 113.74C-1.21172 98.475 -0.0476545 82.8392 4.6692 68.1106C9.38606 53.3821 17.5218 39.9789 28.4112 28.9971C39.3005 18.0152 52.6344 9.76651 67.3226 4.9253L79.5935 42.1552C70.7806 45.0599 62.7803 50.0091 56.2467 56.5983C49.713 63.1874 44.8316 71.2292 42.0015 80.0664C39.1714 88.9035 38.4729 98.285 39.9633 107.444C41.4536 116.603 45.0904 125.279 50.5763 132.763L18.9606 155.938Z"
              fill="#018E42"
            />
          </svg>
        </div>
        <div className="passing_info">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <circle cx="5.74026" cy="6.49999" r="5.74032" fill="#018E42" />
            </svg>
            passed
          </div>
          <p>1423 workers</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <circle cx="5.74026" cy="6.49999" r="5.74032" fill="#ED1C24" />
            </svg>
            fail
          </div>
          <p>134 workers</p>
        </div>
      </div>
    </div>
  );
}

export default QuizPassing;
