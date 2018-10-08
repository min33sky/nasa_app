import React, { Component } from 'react';
import ViewTemplate from './ViewTemplate';

import ViewerContainer from 'containers/ViewerContainer';
import SpaceNavigatorContainer from 'containers/SpaceNavigatorContainer';

class App extends Component {
  render() {
    return (
      <ViewTemplate
        viewer={<ViewerContainer />}
        spaceNavigator={<SpaceNavigatorContainer />}
      />
    );
  }
}

export default App;
