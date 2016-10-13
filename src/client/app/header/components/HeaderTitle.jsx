import React from 'react';
import ReactDOM from 'react-dom';


export default class HeaderTitle extends React.Component {
  render() {
    return (
      <div className="align-right">
        <div id="bp-title">{this.props.title}</div>
        <div id="bp-subtitle">
          {this.props.subtitle}
          &nbsp;
          <span id="bp-user">{this.props.username}</span>
        </div>
      </div>
    );
  }
}
