import {Center, Image, ScrollView, Text, VStack} from "native-base";

import LogoMiniSvg from "@assets/logo-mini.svg"
import defaultUserPhotoImg from '@assets/Avatar.png'

import {LoginFormInput} from "@components/LoginFormInput";
import {LoginButton} from "@components/LoginButton";

export function SignUp() {
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
                    />

                    <LoginFormInput placeholder="Nome"/>
                    <LoginFormInput placeholder="E-mail"/>
                    <LoginFormInput placeholder="Telefone"/>
                    <LoginFormInput isPassword placeholder="Senha"/>
                    <LoginFormInput isPassword placeholder="Confirmar Senha"/>

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

                    <LoginButton title="Ir para o login" variant="light" />
                </Center>

            </VStack>
        </ScrollView>
    )
}