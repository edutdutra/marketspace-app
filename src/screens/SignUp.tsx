import {Center, Image, ScrollView, Text, VStack} from "native-base";

import {LoginFormInput} from "@components/LoginFormInput";
import {LoginButton} from "@components/LoginButton";

import {useNavigation} from "@react-navigation/native";

import LogoMiniSvg from "@assets/logo-mini.svg"
import defaultUserPhotoImg from '@assets/Avatar.png'


export function SignUp() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>

                <Center my={12}>
                    <LogoMiniSvg/>

                    <Text
                        color="gray.100"
                        fontSize="xl"
                        fontFamily="heading"
                    >
                        Boas vindas!
                    </Text>

                    <Text
                        color="gray.200"
                        fontSize="md"
                        fontFamily="body"
                        textAlign="center"
                        mb={4}
                    >
                        Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                    </Text>

                    <Image
                        my={4}
                        source={defaultUserPhotoImg}
                        alt="Imagem do usuário"
                    />

                    <LoginFormInput
                        placeholder="Nome"
                    />

                    <LoginFormInput
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <LoginFormInput
                        placeholder="Telefone"
                        keyboardType="phone-pad"
                    />

                    <LoginFormInput
                        isPassword
                        placeholder="Senha"
                        secureTextEntry
                    />

                    <LoginFormInput
                        isPassword
                        placeholder="Confirmar Senha"
                        secureTextEntry
                    />

                    <LoginButton title="Criar" variant="dark" />
                </Center>

                <Center >
                    <Text
                        color="gray.200"
                        fontFamily="body"
                        fontSize="md"
                    >
                        Já tem uma conta?
                    </Text>

                    <LoginButton
                        title="Ir para o login"
                        variant="light"
                        onPress={handleGoBack}
                    />
                </Center>

            </VStack>
        </ScrollView>
    )
}