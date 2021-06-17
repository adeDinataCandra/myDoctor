import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, GetStarted, Registration, Login, UploadPhoto, Doctor, Message, Hospital, ChooseDoctor, Chating, UserProfile, EditProfile, DoctorProfile, EmailVerify } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='doctor' component={Doctor} />
            <Tab.Screen name='message' component={Message} />
            <Tab.Screen name='hospital' component={Hospital} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="chooseDoctor" component={ChooseDoctor} options={{ headerShown: false }} />
            <Stack.Screen name="chating" component={Chating} options={{ headerShown: false }} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerShown: false }} />
            <Stack.Screen name="EmailVerify" component={EmailVerify} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Router;