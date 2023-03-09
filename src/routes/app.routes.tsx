import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {useTheme} from "native-base";
import {House, SignOut, Tag} from "phosphor-react-native";

import {Home} from "@screens/Home";
import {Advertisement} from "@screens/Advertisement";
import {Loading} from "@components/Loading";
import {AdvertisementDetails} from "@screens/AdvertisementDetails";

type AppRoutes = {
    home: undefined;
    advertisement: undefined
    signOut: undefined
    advertisementDetails: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const {sizes, colors} = useTheme();
    const iconSize = sizes[6];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.gray[200],
            tabBarInactiveTintColor: colors.gray[400],
            tabBarStyle: {
                backgroundColor: colors.gray[700],
                borderTopWidth: 0,
                height: 72,
                paddingTop: sizes[5],
                paddingBottom: sizes[7],
            }
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <House color={color} size={iconSize} weight="bold"/>
                    )
                }}
            />
            <Screen
                name="advertisement"
                component={Advertisement}
                options={{
                    tabBarIcon: ({color}) => (
                        <Tag color={color} size={iconSize} weight="bold"/>
                    )
                }}
            />

            <Screen
                name="signOut"
                component={Loading}
                options={{
                    tabBarIcon: () => (
                        <SignOut color={colors.red[100]} size={iconSize} weight="bold"/>
                    )
                }}
            />

            <Screen
                name="advertisementDetails"
                component={AdvertisementDetails}
                options={{tabBarButton: () => null}}
            />
        </Navigator>
    )
}