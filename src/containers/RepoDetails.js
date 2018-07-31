import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

import Details from '../components/Details';

class RepoDetails extends Component {
  render() {
    const {
      selectedItem
    } = this.props;

    return (
      selectedItem ? <Details selectedItem={selectedItem} /> : null
    )
  }
}

function mapStateToProps(state) {
  return { selectedItem: state.selectedItem };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(RepoDetails);