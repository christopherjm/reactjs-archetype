import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import MainContent from './MainContent';

import { getLocation } from '../actions';
import * as constants from '../constants';

class MainContentContainer extends React.Component {

  _getLocation() {
    var me = this, searchKey;
    
    if (me._mainContent && me._mainContent._searchTextBox && me._mainContent._searchTextBox.value.length > 0) {
    	searchKey = me._mainContent._searchTextBox.value;
    	axios.get('http://localhost:8080/location/' + searchKey).then(function(response) {
    		me.props.dispatch(getLocation(response.data));
    	});
    }
  }

  render() {
    return <MainContent ref={(c) => this._mainContent = c} location={this.props.locationState} getLocation={this._getLocation.bind(this)} />;
  }
}

const mapStateToProps = (state) => (
  {locationState: state[constants.NAME]}
)

export default connect(mapStateToProps)(MainContentContainer)
 