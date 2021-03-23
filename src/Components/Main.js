import{
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Splash from '../screens/SplashScreen';
import Signup from '../screens/SignupScreen'

const MainNavigator = createStackNavigator({
    Splash: {screen: Splash},
    Signup: {screen: Signup}, 
},{
    headerMode: 'none',
    navigationOptions:{
        headerVisible: false,
    }
});

export default createAppContainer{
    MainNavigator
};