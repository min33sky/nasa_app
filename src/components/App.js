import React, { Component } from 'react';
import { ViewTemplate } from './ViewTemplate';
import { SpaceNavigator } from './SpaceNavigator';

import ViewerContainer from 'containers/ViewerContainer';

class App extends Component {
  render() {
    return (
      <ViewTemplate
        viewer={<ViewerContainer />}
        spaceNavigator={<SpaceNavigator />}
      />
    );
  }
}

export default App;
