import {Box, Button, HStack, IInputProps, Input, Text, useTheme} from "native-base";
import {MagnifyingGlass, Sliders} from "phosphor-react-native";

type Props = IInputProps & {}

export function SearchInput({...rest}: IInputProps) {
    const {colors} = useTheme();

    return (
        <Input
            bg="gray.700"
            borderWidth={0}
            borderRadius={6}
            h={12}
            px={4}
            fontFamily="body"
            fontSize="lg"
            color="gray.200"
            placeholderTextColor="gray.400"
            _focus={{
                borderWidth: 1,
                borderColor: "gray.300"
            }}
            InputRightElement={
                <HStack alignItems="center">
                    <Button bg="gray.700" _pressed={{bg: 'gray.700'}}>
                        <MagnifyingGlass size={20} color={colors.gray[200]} weight="bold"/>
                    </Button>
                    <Text fontSize="sm" color="gray.400">
                        |
                    </Text>
                    <Button bg="gray.700" _pressed={{bg: 'gray.700'}}>
                        <Sliders size={20} color={colors.gray[200]} weight="bold"/>
                    </Button>
                </HStack>
            }
            {...rest}
        />
    )
}