import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSession } from "../hooks/useSession";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  const { session } = useSession();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* <Screen name="List" component={SignIn} /> */}
        {/* <Screen name="Register" component={SignUp} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
