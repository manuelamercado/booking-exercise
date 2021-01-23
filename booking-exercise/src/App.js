import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import './App.css';
import { getOrigins, getCities, onChangeProps } from './actions/getOrigins';

const mapStateToProps = state => {
  return { ...state.simpleReducer };
};

const mapDispatchToProps = dispatch => ({
  getOrigins: () => dispatch(getOrigins()),
  getCities: (cityQuery) => dispatch(getCities(cityQuery)),
  onChangeProps: (prop, event) => dispatch(onChangeProps(prop, event))
});

class App extends Component {
  componentDidMount() {
    this.props.getCities('M');
    this.setState({ cities: this.props.cities });
  }

  getCities = (event) => {
    this.props.onChangeProps('origin', event);
    this.props.getCities(this.props.cityQuery);
  };

  getCitiesDestination = (event) => {
    this.props.onChangeProps('destination', event);
    this.props.getCities(this.props.destination);
  };

  handleChange = prop => event => {
    this.props.onChangeProps(prop, event);
  };

 render() {
  const { 
    cities,
    outboundDate,
    destination,
    returnDate,
    adults,
    children,
    infants,
    origin,
    type
  } = this.props;
  return (
   <div className="App">
    <header className="">
     <h1 className="App-title">Booking Exercise</h1>
    </header>
    <Tabs defaultActiveKey="flight" id="uncontrolled-tab-example">
      <Tab eventKey="flight" title={<span><i className="fas fa-plane"/> Flight</span>}>
        <Form inline>
          <Form.Group controlId="origin">
            <Form.Label className="App-label">From</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="text" placeholder="From" onChange={this.getCities} list="Origins" value={origin} />
            <datalist id="Origins">
              <select>
                  <option value="">--Select Contact--</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.i}>{city.i}</option>
                  ))
                  }
              </select>
            </datalist>
          </Form.Group>
          <Form.Group controlId="destination">
            <Form.Label className="App-label">To</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="text" placeholder="To" onChange={this.getCitiesDestination} list="Destinations" value={destination} />
            <datalist id="Destinations">
              <select>
                  <option value="">--Select Contact--</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.i}>{city.i}</option>
                  ))
                  }
              </select>
            </datalist>
            {/* <Form.Text className="text-muted">
              Origin city.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="outboutDate">
            <Form.Label className="App-label">Outbound Flight</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="date" placeholder="Outbound Flight" value={outboundDate} onChange={this.handleChange('outboundDate')} />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Check className="mb-2 mr-sm-2" type="checkbox" label="One way" value={type} onChange={this.handleChange('type')} />
          </Form.Group>
          <Form.Group controlId="returnDate">
            <Form.Label className="App-label">Return Flight</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="date" placeholder="Return Flight" value={returnDate} onChange={this.handleChange('returnDate')} />
          </Form.Group>
          <Form.Group controlId="adults">
            <Form.Label className="App-label">Adults 12+ years</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="number" min="0" value={adults} onChange={this.handleChange('adults')} />
          </Form.Group>
          <Form.Group controlId="children">
            <Form.Label className="App-label">Children 2-11 years</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="number" min="0" value={children} onChange={this.handleChange('children')} />
          </Form.Group>
          <Form.Group controlId="infants">
            <Form.Label className="App-label">Infants 0-1 year</Form.Label>
            <Form.Control className="mb-2 mr-sm-2" type="number" min="0" value={infants} onChange={this.handleChange('infants')} />
          </Form.Group>
        </Form>
        <Button href={`https://www.swiss.com/us/en/Book/${type ? "Outbound" : "RoundTrip"}/${origin.match(/\((.+)\)/) ? origin.match(/\((.+)\)/)[1] : origin}-${destination.match(/\((.+)\)/) ? destination.match(/\((.+)\)/)[1] : destination}/from-${outboundDate}/adults-${adults}/children-${children}/infants-${infants}/class-economy/al-LX/sidmbvl`}>Search</Button>
      </Tab>
      <Tab eventKey="hotel" title={<span><i className="fas fa-bed"/> Hotel</span>} disabled>
      </Tab>
      <Tab eventKey="rentalCar" title={<span><i className="fas fa-car"/> Rental Car</span>} disabled>
      </Tab>
      <Tab eventKey="swissChoice" title={<span><i className="fas fa-crown"/> SWISS Choice</span>} disabled>
      </Tab>
    </Tabs>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
