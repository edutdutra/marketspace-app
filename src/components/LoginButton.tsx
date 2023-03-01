import {Button, IButtonProps, Text} from "native-base";

type Props = IButtonProps & {
    title: string;
    variant: 'blue' | 'light' | 'dark'
}

export function LoginButton({title, variant, ...rest}: Props) {
    return (
        <Button
            w="full"
            h={12}
            mt={4}
            rounded={6}
            bg={variant == 'blue' ? 'blue.light' : variant == 'light' ? 'gray.500' : 'gray.100'}
            _pressed={{
                bg: variant == 'blue' ? 'blue.normal' : variant == 'light' ? 'gray.400' : 'gray.200'
            }}
            {...rest}
        >
            <Text
                fontSize="md"
                fontFamily="heading"
                color={variant == 'blue' ? 'gray.700' : variant == 'light' ? 'gray.200' : 'gray.700'}
            >
                {title}
            </Text>
        </Button>
    )
}