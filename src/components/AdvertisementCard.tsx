import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import {Box, Heading, Image, Text, VStack} from "native-base";
import {UserPhoto} from "@components/UserPhoto";

type Props = TouchableOpacityProps & {
    isNew?: boolean
}

export function AdvertisementCard({isNew = false, ...rest}: Props) {
    return (
        <TouchableOpacity style={{marginBottom: 24}} {...rest}>
            <VStack>
                <Box position="relative">
                    <Image
                        source={{uri: 'https://cdn.awsli.com.br/800x800/1203/1203218/produto/54258334/f0016df132.jpg'}}
                        alt="Imagem do produto"
                        h={100}
                        w={155}
                        borderRadius={6}
                    />
                    <UserPhoto
                        size={8}
                        source={{uri: 'https://github.com/edutdutra.png'}}
                        alt="Imagem de perfil do anúnciante"
                        position="absolute"
                        top={1}
                        left={1}
                    />
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="white"
                        bg={isNew ? 'blue.500' : 'gray.200'}
                        borderRadius={999}
                        px={2}
                        position="absolute"
                        top={1}
                        left={isNew ? 100 : 92}
                    >
                        {isNew ? 'NOVO' : 'USADO'}
                    </Text>
                </Box>
                <Text fontFamily="body" fontSize="md" color="gray.200">Tênis da Nike</Text>
                <Heading fontFamily="heading" fontSize="lg" color="gray.100">R$120,00</Heading>
            </VStack>
        </TouchableOpacity>
    )
}