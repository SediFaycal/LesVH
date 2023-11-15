import Head from 'next/head'
import { motion } from 'framer-motion';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'

export default function BodyIndex() {
  return (
    <> 
    {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            > */}
      <Container maxW={'100%'}
        maxH={'100vh'}
        p={0}
        m={0}
        overflow={'hidden'}
        /////////////////////////// POUR METTRE  UNE PHOTO  
        backgroundImage={'url(/cover_VH.png)'}
        backgroundSize="cover" 
        backgroundPosition="center"
          >
            {/* <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',/////////////////////////////// POUR METTRE UNE VIDEO EN FOND 
            objectFit: 'cover',
            position: 'fixed',
            zIndex: -1,
          }}
        >
          <source src="/video_test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        
        <Stack
          as={'main'}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
        </Stack>
      </Container>
      {/* </motion.div> */}
    </>
  )
}