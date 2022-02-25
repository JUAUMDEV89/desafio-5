import { Flex, Image, Text } from '@chakra-ui/react';

interface CardProps{
    src: string;
    span: string;
}

export function Card({src, span}: CardProps){
    return(
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          
        >
          <Image src={src} />
          <Text marginTop={'1rem'}>{span}</Text>
        </Flex>
    )
}