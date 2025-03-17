import PropTypes from 'prop-types';

function SendMessageWindow({ text }) {
  return <div>{text}</div>;
}

SendMessageWindow.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SendMessageWindow;
