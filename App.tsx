import {StatusBar} from "react-native";
import {NativeBaseProvider} from "native-base";
import {Karla_400Regular, Karla_700Bold, useFonts} from "@expo-google-fonts/karla";

import {THEME} from "./src/theme";

import {Routes} from "@routes/index";
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
            {fontsLoaded ? <Routes/> : <Loading/>}
        </NativeBaseProvider>
    );
}
