import {StatusBar} from "react-native";
import {NativeBaseProvider} from "native-base";
import {Karla_400Regular, Karla_700Bold, useFonts} from "@expo-google-fonts/karla";

import {THEME} from "./src/theme";

import {SignIn} from "./src/screens/SignIn";
import {Loading} from "@components/Loading";

export default function App() {
    const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            {/*<SignIn />*/}
            <Loading/>
        </NativeBaseProvider>
    );
}
