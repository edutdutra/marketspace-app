import {extendTheme} from "native-base";

export const THEME = extendTheme({
    colors: {
        gray: {
            700: '#F7F7F8',
            600: '#EDECEE',
            500: '#D9D8DA',
            400: '#9F9BA1',
            300: '#5F5B62',
            200: '#3E3A40',
            100: '#1A181B'
        },
        blue: {
            light: '#647AC7',
            normal: '#364D9D'

        },
        red: {
            light: '#EE7979'
        }
    },
    fonts: {
        heading: 'Karla_700Bold',
        body: 'Karla_400Regular',
    },
    fontSizes: {
        sm: 12,
        md: 14,
        lg: 16,
        xl: 20,
        xxl: 24
    }
})