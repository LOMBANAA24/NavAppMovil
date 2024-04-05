import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/Home/HomeScreen.tsx";
import ProductsScreen from "../screens/Products/ProductScreen.tsx";
import SettingsScreen from "../screens/Settings/SettingsScreen.tsx";
import ProductScreen from "../screens/Products/ProductsScreen.tsx";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown : true,
        headerStyle: {
          elevation : 0,
          shadowColor: 'transparent',
        }
      }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
