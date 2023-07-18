import { Message } from "./Notification.styled";
import PropTypes from 'prop-types'

export const Notification = ({ message }) => (
    <Message>{message}</Message>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}