import {ScrollView, Text, VStack} from "native-base";

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Text>SIGN IN</Text>
            </VStack>
        </ScrollView>
    )
}