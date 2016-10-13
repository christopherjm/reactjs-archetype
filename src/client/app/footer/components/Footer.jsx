import React from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends React.Component {
  render() {
    var currYear = new Date().getFullYear();
    return (
      <div id="bp-footer">
    	   &copy; 2012-{currYear} Blueprint Medicines
    	</div>
    );
  }
}
