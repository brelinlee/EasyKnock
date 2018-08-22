import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import MapWithAMarker from "./Map.js";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "89 E 42nd St, New York, NY 10017",
      center: { lat: 40.7128, lng: 74.006 }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCenter = this.setCenter.bind(this);
  }
  handleChange(event) {
    this.setState({ address: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setCenter(this.state.address);
  }
  setCenter(address) {
    const google = window.google;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: address
      },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          let center = results[0].geometry.location.lat;
        } else {
          console.log("Not successful:" + status);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <div className="entry-h1">
          <h1>What is your address?</h1>
        </div>
        <div className="row" id="map" />
        <div className="row">
          <form>
            <input
              type="text"
              name="name"
              value={this.state.address}
              className="address"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              value="Submit"
              className="ui primary button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBScrxW48qtkExHFRFS0BrSylFOVm7Wq8Y&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `50%` }} />}
            containerElement={
              <div
                style={{
                  height: `400px`,
                  width: "600px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                center={this.state.center}
                position={this.state.position}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default Address;
