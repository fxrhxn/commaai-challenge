/**
 * routes.js
 * Contains the routing configuration
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

// common components
import AppContainer from 'containers/app';
import About from 'components/about'
import NotFound from 'components/not-found'


//Import the map test
import MapTest from './components/map-test'
import MapTest2 from './components/map-test2'
import MapScratch from './components/map/fromScratch'
import MapScratch2 from './components/map/fromScratch2'

//Test out Redux
import ReduxTest from './components/redux-test'

// view components
import HomeContainer from 'containers/home'
import DifferentPageContainer from 'containers/different-page/different-page-container'

//Main Map
import MainMap from './components/map/map-final'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={MainMap}/>
    <Route path="about" component={About}/>
    <Route path="map" component={MainMap}/>
    <Route path="map2" component={MapScratch2}/>
    <Route path="different" component={DifferentPageContainer} />
    <Route path="redux" component={ReduxTest} />
    <Route path="*" component={NotFound}/>
  </Route>
)
