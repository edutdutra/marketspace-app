import {Box, Button, HStack, Image, useTheme, Text, VStack, Heading, ScrollView} from "native-base";
import {ArrowLeft, Bank, Barcode, CreditCard, Money, QrCode} from "phosphor-react-native";
import {useNavigation} from "@react-navigation/native";
import {UserPhoto} from "@components/UserPhoto";

export function AdvertisementDetails() {
    const {colors} = useTheme();
    const navigation = useNavigation();


    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1} mt={10}>
            <ScrollView>
                <Button
                    w={8}
                    h={8}
                    px={6}
                    mb={3}
                    bg="gray.600"
                    _pressed={{
                        bg: 'gray.600'
                    }}
                    onPress={handleGoBack}
                >
                    <ArrowLeft size={24} color={colors.gray[100]}/>
                </Button>

                <Image
                    source={{uri: 'https://cdn.awsli.com.br/800x800/1203/1203218/produto/54258334/f0016df132.jpg'}}
                    alt="Imagem do produto"
                    h={280}
                    w={"full"}
                />

                <Box px={6} mt={5}>
                    <HStack alignItems="center" mb={6}>
                        <UserPhoto
                            size={8}
                            source={{uri: 'https://github.com/edutdutra.png'}}
                            alt="Imagem de perfil do anúnciante"
                        />
                        <Text
                            ml={2}
                            fontFamily="body"
                            fontSize="md"
                            color="gray.100"
                        >
                            Eduardo Dutra
                        </Text>
                    </HStack>
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="gray.200"
                        bg="gray.500"
                        borderRadius={999}
                        px={2}
                        w={16}
                        h={5}
                        textAlign="center"
                    >
                        USADO
                    </Text>

                    <HStack justifyContent="space-between" mt={2} mb={2}>
                        <Heading
                            fontFamily="heading"
                            fontSize="xl"
                            color="gray.100"
                        >
                            Bicicleta
                        </Heading>
                        <Heading
                            fontFamily="heading"
                            fontSize="xl"
                            color="blue.100"
                        >
                            R$120,00
                        </Heading>
                    </HStack>

                    <Text
                        fontFamily="body"
                        fontSize="md"
                        color="gray.200"
                    >
                        Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas
                        urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc,
                        purus iaculis in aliquam.
                    </Text>

                    <HStack mt={6} mb={4}>
                        <Text
                            fontFamily="heading"
                            fontSize="md"
                            color="gray.200"
                            mr={2}
                        >
                            Aceita troca?
                        </Text>
                        <Text
                            fontFamily="body"
                            fontSize="md"
                            color="gray.200"
                        >
                            Sim
                        </Text>
                    </HStack>

                    <Text
                        fontFamily="heading"
                        fontSize="md"
                        color="gray.200"
                        mb={2}
                    >
                        Meios de pagamento:
                    </Text>

                    <HStack>
                        <Barcode size={18} color={colors.gray[200]}/>
                        <Text fontFamily="body" fontSize="md" color="gray.200" mb={1} ml={2}>
                            Boleto
                        </Text>
                    </HStack>

                    <HStack>
                        <QrCode size={18} color={colors.gray[200]}/>
                        <Text fontFamily="body" fontSize="md" color="gray.200" mb={1} ml={2}>
                            Pix
                        </Text>
                    </HStack>

                    <HStack>
                        <Money size={18} color={colors.gray[200]}/>
                        <Text fontFamily="body" fontSize="md" color="gray.200" mb={1} ml={2}>
                            Dinheiro
                        </Text>
                    </HStack>

                    <HStack>
                        <CreditCard size={18} color={colors.gray[200]}/>
                        <Text fontFamily="body" fontSize="md" color="gray.200" mb={1} ml={2}>
                            Cartão de crédito
                        </Text>
                    </HStack>

                    <HStack>
                        <Bank size={18} color={colors.gray[200]}/>
                        <Text fontFamily="body" fontSize="md" color="gray.200" mb={1} ml={2}>
                            Depósito Bancário
                        </Text>
                    </HStack>

                </Box>
            </ScrollView>
        </VStack>
    )
}