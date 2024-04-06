import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Presentation/routes/StackNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator></StackNavigator>
        </NavigationContainer>
    )
}

export default App;