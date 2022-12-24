import { Box } from 'components/Box';
import { Feedback } from 'components/Feedback';
import { useState } from 'react';
import { Statistics } from 'components/Statistics';

export const App = _ => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleClick(feedbackButtons) {
    switch (feedbackButtons) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  }

  const countPositiveFeedbackPercentage = _ => Math.round((good / total) * 100);
  const countTotalFeedback = _ => good + neutral + bad;

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Box
      display="grid"
      alignItems="center"
      justifyContent="center"
      bg="primary"
      p={5}
    >
      <Feedback
        title="Please Leave feedback"
        options={options}
        onClick={handleClick}
      />
      <Statistics
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Box>
  );
};
