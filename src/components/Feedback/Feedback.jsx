import { Title, Btn, Wrapper } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ title, options, onClick }) => {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        {options.map((option, idx) => (
          <Btn key={idx} onClick={() => onClick(option)}>
            {option}
          </Btn>
        ))}
      </Wrapper>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
