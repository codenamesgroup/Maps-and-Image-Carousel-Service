import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // business: {
      //   name: 'business name',
      //   neighborhood: 'neighborhood',
      //   address: 'address',
      //   city: 'city',
      //   state: 'state',
      //   postal_code: 'postal_code',
      //   logitude: 0,
      //   latitude: 0,
      // },
      // photos: [
      //   {
      //     user_id:
      //   },
      // ],
    };
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',

        width: '1000px',
        height: '300px',

        margin: 'auto',
        background: 'red',
      }
    }

    return (
      <div style={styles.container}>
        <h1>lol</h1>
      </div>
    );
  }
}

App.PropTypes = {

}

export { App };