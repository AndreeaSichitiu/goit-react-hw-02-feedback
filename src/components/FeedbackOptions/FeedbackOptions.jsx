import React from 'react';
import style from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.buttonContainer}>
      {Object.keys(options).map(option => (
        <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={style.feedbackButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}