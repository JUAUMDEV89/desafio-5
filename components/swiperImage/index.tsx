import { SwiperSlide, Swiper, } from 'swiper/react';
import { background, color, Image, Text } from '@chakra-ui/react'

interface SwiperImageProps {
    src: string,
    text: string
}

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function SwiperImage({ src, text }: SwiperImageProps) {
    return (
        <SwiperSlide
            style={{ position: 'relative' }}
        >
            <Image
                backgroundColor={'black'}
                w={1000}
                h={500}
                src={src}
            />

            <Text
                position={'absolute'}
                zIndex={3}
                top={'40%'}
                left={'40%'}
                color={'white'}
                fontSize={'6xl'}>
                {text}
            </Text>

        </SwiperSlide>
    )
}