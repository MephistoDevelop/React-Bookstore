import React from 'react';

const ReadProgress = () => (
  <div className="progress-container">
    <div className="progress blue">
      <span className="progress-left">
        <span className="progress-bar" />
      </span>
      <span className="progress-right">
        <span className="progress-bar" />
      </span>
      <div className="progress-value">0%</div>
      <div className="progress-value-completed">Completed </div>
    </div>
  </div>
);
export default ReadProgress;
