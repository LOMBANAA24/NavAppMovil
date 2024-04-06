import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParamListBase, TypedNavigator } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Drawer : TypedNavigator<ParamListBase, ... = createDrawerNavigator();

function MyDrawer() : React.JSX.Element {
   return (
    <Drawer.Navigator>
    <Drawer.Screen name="StackNavigator" component={StackNavigator}/>
    <Drawer.Screen name="Profile" component={ProfileScreen}/>
    </Drawer.Navigator>
   );
}