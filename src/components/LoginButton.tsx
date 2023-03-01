import {Button, IButtonProps, Text} from "native-base";

type Props = IButtonProps & {
    title: string;
    variant: 'blue' | 'light'
}

export function LoginButton({title, variant, ...rest}: Props) {
    return (
        <Button
            w="full"
            h={12}
            mt={4}
            rounded={6}
            bg={variant == 'blue' ? 'blue.light' : 'gray.500'}
            _pressed={{
                bg: variant == 'blue' ? 'blue.normal' : 'gray.400'
            }}
            {...rest}
        >
            <Text
                fontSize="md"
                fontFamily="heading"
                color={variant == 'blue' ? 'gray.700' : 'gray.200'}
            >
                {title}
            </Text>
        </Button>
    )
}