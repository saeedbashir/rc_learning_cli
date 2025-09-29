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
import colors from "../theme/colors";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: colors.primary, // Back button and header text color
        headerTitleStyle: {
          color: "#000", // Keep title black or change to TINT_COLOR if you want
        },
      }}
    >
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
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: colors.primary, // Back button and header text color
        headerTitleStyle: {
          color: "#000", // Keep title black or change to TINT_COLOR if you want
        },
      }}
    >
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
          tabBarActiveTintColor: colors.primary, // Active tab icon and text color
          tabBarInactiveTintColor: "gray", // Inactive tab color
          tabBarStyle: {
            backgroundColor: "#fff", // Tab bar background
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: string = "home";

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
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