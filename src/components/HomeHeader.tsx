import {Button, Heading, HStack, Text, useTheme, VStack} from "native-base";
import defaultUserPhotoImg from "@assets/Avatar.png";
import {UserPhoto} from "@components/UserPhoto";
import {Plus} from "phosphor-react-native";

export function HomeHeader() {
    const {colors} = useTheme();

    return (
        <HStack pt={10}alignItems="center">
            <UserPhoto
                source={defaultUserPhotoImg}
                size={12}
                alt="Imagem do usuário"
                mr={2}
            />

            <VStack flex={1}>
                <Text color="gray.100" fontSize="lg" fontFamily="body">
                    Boas vindas,
                </Text>
                <Heading color="gray.100" fontSize="lg" fontFamily="heading">
                    Maria
                </Heading>
            </VStack>

            <Button
                py={3}
                px={3}
                h={12}
                rounded={6}
                bg="gray.100"
                _pressed={{
                    bg: 'gray.200'
                }}
            >
                <HStack alignItems="center">
                    <Plus size={16} color={colors.gray[600]}/>
                    <Text
                        color="gray.700"
                        fontSize="md"
                        fontFamily="heading"
                        textAlign="center"
                        ml={2}
                    >
                        Criar anúncio
                    </Text>
                </HStack>
            </Button>
        </HStack>
    )
}

// <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">