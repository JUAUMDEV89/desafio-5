import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide, Swiper, } from 'swiper/react';
import { background, color, Image } from '@chakra-ui/react'
import { Text, Box } from '@chakra-ui/react';
import Link from 'next/link'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slide() {

  return (
    <Box
      display={'flex'}
      width={'100%'}
      maxWidth={'1000px'}
      justifyContent={'center'}
      alignItems={'center'}
      margin={'auto'}
      marginTop={'5rem'}
      marginBottom={'5rem'}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        cssMode={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

        width={1000}
      >
        <SwiperSlide style={{ position: 'relative' }}><Image w={1000} h={500} src='./assets/europa.jpg' /><Text position={'absolute'} zIndex={3} top={'40%'} left={'40%'} color={'white'} fontSize={'6xl'}><Link href="/continents/europa">Europa</Link></Text></SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}><Image w={1000} h={500} src='./assets/america_s.jpg' /><Text position={'absolute'} zIndex={3} top={'40%'} left={'40%'} color={'white'} fontSize={'6xl'}>América do Sul</Text></SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}><Image w={1000} h={500} src='./assets/asia.jpg' /><Text position={'absolute'} zIndex={3} top={'40%'} left={'40%'} color={'white'} fontSize={'6xl'}>Ásia</Text></SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}><Image w={1000} h={500} src='./assets/oceania.jpg' /><Text position={'absolute'} zIndex={3} top={'40%'} left={'40%'} color={'white'} fontSize={'6xl'}>Oceania</Text></SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}><Image w={1000} h={500} src='./assets/africa.jpg' /><Text position={'absolute'} zIndex={3} top={'40%'} left={'40%'} color={'white'} fontSize={'6xl'}>Africa</Text></SwiperSlide>
      </Swiper>
    </Box>
  )
}