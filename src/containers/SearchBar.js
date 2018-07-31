import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchBar.css';

const searchIcon = {
  position: "absolute",
  left: "8px",
  top: "14px",
  color: "#ccc"
}

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      q: "",
      show: {
        visibility: "visible"
      }
    };
  }

  onChangeQuery = event => {
    this.setState({
      q: event.target.value
    }, () => {
      this.props.changeQuery(this.state.q);
      if(this.state.q.length > 0) {
        this.props.fetchRepos();
        this.setState({
          show: {
            visibility: "visible"
          }
        });
      } else {
        this.props.clearSearch();
      }
    });
  }

  onBlur = () => {
    this.setState({
      show: {
        visibility: "hidden"
      }
    });
  }

  render() {
    const {
      results,
      selectItem
    } = this.props;

    return (
      <div className="search-container">
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Type your search query"
            type="text"
            value={this.state.q}
            onChange={this.onChangeQuery}
            onBlur={this.onBlur}
          />
          <FontAwesomeIcon style={searchIcon} icon="search" />
        </div>
        <ul className="search-autocomplete" style={results.length > 0 ? this.state.show : {}}>
        {
          results.map((item, index) => <li className="search-autocomplete-item" key={index} onMouseDown={() => selectItem(item)}>{item.full_name}</li>)
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { results: state.results };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SearchBar);