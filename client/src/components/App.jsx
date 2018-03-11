import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { FlexDiv } from './styledComponents';
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
    const businessId = this.parseUrlForBusinessId();

    axios.get(`/map-and-images/business/${businessId}`)
      .then((response) => {
        return response.data;
      })
      .then((businessData) => {
        this.setState({business: businessData});
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`/map-and-images/business/${businessId}/photos`)
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

  /** parses the url for the business id */
  parseUrlForBusinessId = () => {
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

    return url[0];
  }

  render() {
    return (
      <FlexDiv>
        <BusinessInfo business={this.state.business}/>
        <Carousel photos={this.state.photos || []} business={this.state.business}/>
      </FlexDiv>
    );
  }
}

export { MapAndImages };