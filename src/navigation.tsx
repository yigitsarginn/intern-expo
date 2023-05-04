import React, { useContext } from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LogBox, Platform } from "react-native";
import { Calculate } from "@/views/Main/Calculate";
import { Results } from "@/views/Main/Results";
import { Inputs } from "./views/Onboarding/Inputs";
import { Result } from "./views/Onboarding/Result";
import { WalkthroughFirst } from "./views/Walkthrough/First";
import { WalkthroughSecond } from "./views/Walkthrough/Second";
import { ResultsDetails } from "@/views/ResultsDetails";
import { Icon } from "@/components/Icon";
import { StyleSheet } from "react-native";
import { rhs, rs } from "@/style/fonts";
import colors from "@/style/colors";
import { t } from "@/lang";
import { Settings } from "@/views/Main/Settings";
import { Statistics } from "@/views/Main/Statistics";
import { CalculateResult } from "@/views/CalculateResult";
import { useAppSelector } from "@/store";

export type RootStack = {
  Main: NavigatorScreenParams<BottomBarProps>;
  Onboarding: NavigatorScreenParams<OnboardingStackProps>;
  Walkthrough: NavigatorScreenParams<WalkthroughStackProps>;
  ResultsDetail: {
    recordId: BMIRecord["id"];
  };
  CalculateResult: {
    data: BMIRawRecord;
  };
};

type BottomBarProps = {
  Calculate: undefined;
  Results: undefined;
  Statistics: undefined;
  Settings: undefined;
};

export type OnboardingStackProps = {
  Inputs: undefined;
  Result: {
    data: BMIRawRecord;
  };
};

type WalkthroughStackProps = {
  First: undefined;
  Second: undefined;
};

LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

const renderIcon = (name: string, focused: boolean) => {
  return (
    <Icon
      icon={name}
      color={focused ? colors.Dark : colors.Dark50}
      style={styles.icon}
    />
  );
};

const RootStackNavigator = createNativeStackNavigator<RootStack>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackProps>();
const BottomBar = createMaterialTopTabNavigator<BottomBarProps>();
const WalkthroughStack = createNativeStackNavigator<WalkthroughStackProps>();

const BottomBarScreens = () => {
  return (
    <BottomBar.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: colors.PrimaryDark,
          width: rs(6),
          height: rs(6),
          borderRadius: 3,
          marginBottom: Platform.OS === "ios" ? rhs(20) : rhs(10),
          marginLeft: rs(43),
        },
        tabBarIndicatorContainerStyle: {
          paddingBottom: rhs(30),
        },
        tabBarLabelStyle: {
          marginTop: -rhs(1),
          fontSize: rs(12),
          textTransform: "capitalize",
          width: rs(100),
        },
        tabBarStyle: {
          backgroundColor: colors.White,
          paddingBottom: Platform.OS === "ios" ? rhs(15) : rhs(5),
        },
        tabBarActiveTintColor: colors.Dark,
        tabBarInactiveTintColor: colors.Dark50,
      }}
      tabBarPosition={"bottom"}
      initialRouteName={"Calculate"}
    >
      <BottomBar.Screen
        options={{
          tabBarIcon: (props) => renderIcon("home", props.focused),
          tabBarLabel: t("bottomTab.HOME"),
        }}
        name="Calculate"
        component={Calculate}
      />
      <BottomBar.Screen
        options={{
          lazy: true,
          tabBarIcon: (props) => renderIcon("search", props.focused),
          tabBarLabel: t("bottomTab.SEARCH"),
        }}
        name="Results"
        component={Results}
      />
      <BottomBar.Screen
        options={{
          lazy: true,
          tabBarIcon: (props) => renderIcon("istatistik", props.focused),
          tabBarLabel: t("bottomTab.NETWORK"),
        }}
        name="Statistics"
        component={Statistics}
      />
      <BottomBar.Screen
        options={{
          tabBarIcon: (props) => renderIcon("ayarlar", props.focused),
          tabBarLabel: t("bottomTab.PROFILE"),
        }}
        name="Settings"
        component={Settings}
      />
    </BottomBar.Navigator>
  );
};

const WalkthroughScreens = () => {
  return (
    <WalkthroughStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"First"}
    >
      <WalkthroughStack.Screen name="First" component={WalkthroughFirst} />
      <WalkthroughStack.Screen name="Second" component={WalkthroughSecond} />
    </WalkthroughStack.Navigator>
  );
};

const OnboardingScreens = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Inputs"}
    >
      <OnboardingStack.Screen name={"Inputs"} component={Inputs} />
      <OnboardingStack.Screen name={"Result"} component={Result} />
    </OnboardingStack.Navigator>
  );
};

function Screens() {
  const initialLaunch = useAppSelector((state) => state.app.initialLaunch);
  return (
    <RootStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialLaunch ? "Walkthrough" : "Main"}
    >
      <RootStackNavigator.Screen name="Main" component={BottomBarScreens} />
      <RootStackNavigator.Screen
        name="Onboarding"
        component={OnboardingScreens}
      />
      <RootStackNavigator.Screen
        name="Walkthrough"
        component={WalkthroughScreens}
      />
      <RootStackNavigator.Screen
        name="ResultsDetail"
        component={ResultsDetails}
      />
      <RootStackNavigator.Screen
        name="CalculateResult"
        component={CalculateResult}
      />
    </RootStackNavigator.Navigator>
  );
}

export { Screens };

const styles = StyleSheet.create({
  icon: {
    width: rs(20),
    height: rs(20),
  },
});
