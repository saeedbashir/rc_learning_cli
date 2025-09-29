import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MoviesListScreen from "../screens/Home/MoviesListScreen";
import MovieDetailScreen from "../screens/Home/MovieDetailScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import ProfileScreen from "../screens/Settings/ProfileScreen";
import SettingDetailsScreen from "../screens/Settings/SettingDetailsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MoviesList"
        component={MoviesListScreen}
        options={{ title: "Movies" }}
      />
      <HomeStack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ title: "Details" }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <SettingsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <SettingsStack.Screen
        name="SettingDetails"
        component={SettingDetailsScreen}
        options={{ title: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: string = "home";

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },  
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
