import {Button, HStack, Text, useTheme, VStack} from "native-base";

import {HomeHeader} from "@components/HomeHeader";
import {SearchInput} from "@components/SearchInput";

import {ArrowRight, Tag} from "phosphor-react-native";
import {AdvertisementCard} from "@components/AdvertisementCard";
import {AppNavigatorRoutesProps} from "@routes/app.routes";
import {useNavigation} from "@react-navigation/native";

export function Home() {
    const {colors} = useTheme();
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenAdvertisementCard() {
        navigation.navigate('advertisementDetails');
    }

    return (
        <VStack flex={1} px={6}>
            <HomeHeader/>

            <Text mt={9} mb={3} color="gray.300" fontFamily="body" fontSize="md">
                Seus produtos anunciados para venda
            </Text>

            <Button
                borderRadius={6}
                py={3}
                // px={4}
                bg="gray.500"
                _pressed={{
                    bg: 'gray.400'
                }}
            >
                <HStack alignItems="center">
                    <Tag size={22} color={colors.blue[500]}/>

                    <VStack ml={4}>
                        <Text color="gray.200" fontFamily="heading" fontSize="xl">
                            4
                        </Text>
                        <Text color="gray.200" fontFamily="body" fontSize="sm">
                            anúncios ativos
                        </Text>
                    </VStack>

                    <Text color="blue.500" fontFamily="heading" fontSize="sm" ml={16} mr={2}>
                        Meus anúncios
                    </Text>

                    <ArrowRight size={16} color={colors.blue[500]}/>

                </HStack>
            </Button>

            <Text mt={8} mb={3} color="gray.300" fontFamily="body" fontSize="md">
                Compre produtos variados
            </Text>

            <SearchInput placeholder="Buscar anúncio" mb={6}/>
            <AdvertisementCard onPress={handleOpenAdvertisementCard}/>
            <AdvertisementCard isNew={true}/>
        </VStack>
    )
}

