import { Title } from 'components/Feedback/Feedback.styled';
import { List, Item, Count } from './Statistics.styled';
import { Notification } from 'components/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) =>
  total > 0 ? (
    <>
      <Title>{title}</Title>
      <List>
        <Item>
          Good: <Count>{good}</Count>
        </Item>
        <Item>
          Neutral: <Count>{neutral}</Count>
        </Item>
        <Item>
          Bad: <Count>{bad}</Count>
        </Item>
        <Item>
          Total: <Count>{total}</Count>
        </Item>
        <Item>
          Positive feedback: <Count>{positivePercentage}%</Count>
        </Item>
      </List>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
