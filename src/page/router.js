import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {Easing, Animated} from 'react-native';

import SlideMenu from '../page/slideMenu/slideMenu';
import Home from './home';
import Login from './Login/login';

import Core from './Login/core';

import Inbox from './components/screen/inbox';
import Compose from '../page/components/screen/compose';

// import Google from './Login/components/google';
// import Outlook from './Login/components/outlook';
// import Out from './Login/components/out';
import OutMap from './Login/components/OutMap';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};
const AppNavigator = createStackNavigator(
  {
    // Home: { screen: Home },
    // Login: { screen: Login },

    // OutMap: { screen: OutMap },
    Home: {screen: Home},
    Inbox: {screen: Inbox},
    Compose: {screen: Compose},
    SlideMenu: {screen: SlideMenu},
  },
  {
    transitionConfig,
  },
);

const Drawer = createDrawerNavigator(
  {
    AppNavigator: {screen: AppNavigator},
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 300,
  },
);
export default Drawer;
