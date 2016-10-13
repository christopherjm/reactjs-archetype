;import React from 'react';
import ReactDOM from 'react-dom';


export default class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding:25, marginLeft:50}}>
        <div>Get Location</div>
        <input type="text" name="txtBarcode" ref={(c) => this._searchTextBox = c} placeholder="Enter name or barcode"/>
        <button style={{marginLeft:10}} onClick={this.props.getLocation}>Submit</button>

        <br/><br/>
        <p>ID: {this.props.location.id}</p>
        <p>Barcode: {this.props.location.barcode}</p>
        <p>Location Type: {this.props.location.locationType}</p>
        <p>Name: {this.props.location.name}</p>
      </div>
    );
  }
}
