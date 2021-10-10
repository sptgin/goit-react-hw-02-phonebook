import React from 'react';
import './Section.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div className="task__section">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
