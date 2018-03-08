import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { BusinessInfo } from './BusinessInfo.jsx';
import { Carousel } from './Carousel.jsx';

class MapAndImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: {},
      photos: [],
    };
  }

  componentDidMount() {
    let url = window.location.href;
    url = url.charAt(url.length - 1) === '/' ? url.substr(0, url.length - 1) : url;
    url = url.split('/').pop();
    url = url.split('?');
    if (url.length > 1) {
      let urlParams = url[1].split('&');
      urlParams = urlParams.reduce((acc, param) => {
        param = param.split('=');
        acc[param[0]] = param[1];
        return acc;
      }, {id: url[0]});
    }

    url = url[0];

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

export { MapAndImages };