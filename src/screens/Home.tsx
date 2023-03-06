import {HStack, Text, VStack} from "native-base";
import {HomeHeader} from "@components/HomeHeader";

export function Home() {
    return (
        <VStack flex={1} px={6}>
            <HomeHeader />

            <Text
                mt={9}
                mb={3}
                color="gray.300"
                fontFamily="body"
                fontSize="md"
            >
                Seus produtos anunciados para venda
            </Text>
            <HStack
                bg="blue.light"
                opacity={10}
                borderRadius={6}
            >
                <Text>
                    anúncios ativos
                </Text>
            </HStack>
        </VStack>
    )
}

