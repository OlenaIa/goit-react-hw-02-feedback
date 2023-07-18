import { Button, Wrapper } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<Wrapper>
        {options.map(option => (
            <Button
                type='button'
                key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </Button>
        ))}
    </Wrapper>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}