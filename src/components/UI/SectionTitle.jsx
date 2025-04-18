import PropTypes from 'prop-types';
function SectionTitle({ text }) {
  return <h2 className="sectionTitle">{text}</h2>;
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
