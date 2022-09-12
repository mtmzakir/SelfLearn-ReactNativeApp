import React from 'react'
import {DrawerActions} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FlashScreen from './screens/Flash'
import SignInScreen from './screens/SignIn'
import CreateAccScreen from './screens/CreateAcc'
import HomeScreen from './screens/Home'
import CatogScreen from "./screens/Catog";
import NotifiScreen from "./screens/Notifi";
import WebAppsScreen from "./screens/WebApps";
import MobAppsScreen from "./screens/MobApps";
import StdAppsScreen from "./screens/StdApps";
import PythonDetailsScreen from "./screens/PythonDetails";

const {navigation} = createDrawerNavigator();
const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{drawerPosition: 'left'}}>
            <Drawer.Screen name="Flash" component={FlashScreen}
                           options={{ headerShown:false, drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="CreateAcc" component={CreateAccScreen}
                           options={{ headerShown:false, drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="Home" component={HomeScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"HOME",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Catog" component={CatogScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"CATEGORIES",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Notifi" component={NotifiScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"NOTIFICATIONS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="WebApps" component={WebAppsScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"WEB APPS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="MobApps" component={MobAppsScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"MOBILE APPS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="StdApps" component={StdAppsScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"STANDALONE APPS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="PythonDetails" component={PythonDetailsScreen}
                           options={{
                               drawerItemStyle: { display: 'none' },
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"PYTHON",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="SignIn" component={SignInScreen}
                           options={{ headerShown:false,title:"LOGOUT" }}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default MyStack
