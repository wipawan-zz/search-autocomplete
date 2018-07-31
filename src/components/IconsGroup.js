import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Details.css';

const IconsGroup = ({ stars, forks, watchers }) => (
  <div className="details-icons">
      <span className="details-icon-group">
        <FontAwesomeIcon className="details-icon-item" icon="star" size="2x" color="#222" />
        <span className="details-icon-item">{stars}</span>
      </span>
      <span className="details-icon-group">
        <FontAwesomeIcon className="details-icon-item" icon="code-branch" size="2x" color="#222" />
        <span className="details-icon-item">{forks}</span>
      </span>
      <span className="details-icon-group">
        <FontAwesomeIcon className="details-icon-item" icon="eye" size="2x" color="#222" />
        <span className="details-icon-item">{watchers}</span>
      </span>
    </div>
);

export default IconsGroup;