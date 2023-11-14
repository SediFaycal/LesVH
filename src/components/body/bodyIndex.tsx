import Head from 'next/head'
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
      <Container maxW={'100%'}
        maxH={'100vh'}
        p={0}
        m={0}
        overflow={'hidden'}
        backgroundImage={'url(/cover_VH.png)'}
        backgroundSize="cover"
        backgroundPosition="center">
        <Stack
          as={'main'}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
        </Stack>
      </Container>
    </>
  )
}