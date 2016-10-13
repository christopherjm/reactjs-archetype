import React from 'react';
import ReactDOM from 'react-dom';
import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';


export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <HeaderLogo/>
        <HeaderTitle title={this.props.title} subtitle={this.props.subtitle} username={this.props.username}/>
      </div>
    );
  }
}
