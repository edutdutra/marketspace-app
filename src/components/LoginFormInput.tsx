import {Box, FormControl, IInputProps, Input, useTheme} from "native-base";
import {Eye} from "phosphor-react-native";
import {TouchableOpacity} from "react-native";
import {useState} from "react";

type Props = IInputProps & {
    isPassword?: boolean;
}

export function LoginFormInput({isPassword = false, secureTextEntry, ...rest}: Props) {
    const [hiddenPassword, setHiddenPassword] = useState(true);

    const {colors} = useTheme();

    return (
        <FormControl mb={4}>
            <Input
                backgroundColor="gray.700"
                h={12}
                px={4}
                borderRadius={6}
                borderWidth={0}
                fontFamily="body"
                fontSize="lg"
                color="gray.200"
                placeholderTextColor="gray.400"
                secureTextEntry={isPassword ? hiddenPassword : secureTextEntry}
                _focus={{
                    borderWidth: 1,
                    borderColor: "gray.300"
                }}
                InputRightElement={isPassword ?
                    <Box mr={4}>
                        <TouchableOpacity onPress={() => setHiddenPassword(!hiddenPassword)}>
                            <Eye size={20} color={colors.gray[300]}/>
                        </TouchableOpacity>
                    </Box>
                    : <></>
                }
                {...rest}
            />
        </FormControl>
    )
}