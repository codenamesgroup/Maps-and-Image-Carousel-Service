import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { BusinessInfo } from './BusinessInfo.jsx';
import { Carousel } from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: {},
      photos: [],
    };
  }

  componentDidMount() {
    let urlArray = window.location.href.split('/');
    let url = urlArray[urlArray.length - 2];

    axios.get(`/map-and-images/business/${url}`)
      .then((response) => {
        return response.data;
      })
      .then((businessData) => {
        this.setState({business: businessData});
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`/map-and-images/business/${url}/photos`)
      .then((response) => {
        return response.data;
      })
      .then((photosData) => {
        this.setState({photos: photosData});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',

        width: '1000px',

        margin: 'auto',
        background: 'lightgray',
      }
    }

    return (
      <div style={styles.container}>
        <BusinessInfo business={this.state.business}/>
        <Carousel photos={this.state.photos || []}/>
      </div>
    );
  }
}

export { App };