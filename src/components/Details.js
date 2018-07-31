import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Details.css';


const Details = ({ selectedItem }) => (
  <div className="details-container">
    <div className="details-text-container">
      <div className="details-repo-title" onClick={() => window.open(selectedItem.html_url, "_blank")}>{selectedItem.full_name}</div>
      <div className="details-repo-text">{selectedItem.language}</div>
      <div className="details-repo-desc">{selectedItem.description}</div>
    </div>
    <IconsGroup 
      stars={selectedItem.stargazers_count}
      forks={selectedItem.forks_count}
      watchers={selectedItem.watchers_count}
    />
  </div>
);

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

export default Details;