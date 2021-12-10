import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { List } from "../pages/List";
import { Add } from "../pages/Add";

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="List" component={List} />
        <Screen name="Add" component={Add} />
      </Navigator>
    </NavigationContainer>
  );
}
