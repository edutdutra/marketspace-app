import {Center, ScrollView, Text, VStack} from "native-base";

import LogoSvg from "@assets/logo.svg"
import TitleSvg from "@assets/title.svg"
import {LoginFormInput} from "@components/LoginFormInput";

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>

                <Center my={24}>
                    <LogoSvg/>
                    <TitleSvg/>
                    <Text color="gray.300" fontSize="md">Seu espaço de compra e venda</Text>
                </Center>

                <Center>
                    <Text
                        color="gray.200"
                        fontFamily="body"
                        fontSize="md"
                        mb={4}
                    >
                        Acesse sua conta
                    </Text>

                    <LoginFormInput placeholder="E-mail"/>
                    <LoginFormInput isPassword placeholder="Senha"/>

                </Center>

                <Center>

                </Center>

            </VStack>
        </ScrollView>
    )
}