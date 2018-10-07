import React, { Component } from 'react';
import { ViewTemplate } from './ViewTemplate';
import { SpaceNavigator } from './SpaceNavigator';
import Viewer from './Viewer';

import * as api from 'lib/api';

class App extends Component {
  componentDidMount() {
    this.getApod();
  }

  getApod = async date => {
    try {
      const response = await api.getAPOD(date);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ViewTemplate
        viewer={
          <Viewer
            url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
            mediaType="video"
          />
        }
        spaceNavigator={<SpaceNavigator />}
      />
    );
  }
}

export default App;
