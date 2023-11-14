import React, { useState } from 'react';
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
    SimpleGrid,
    Image,
  } from '@chakra-ui/react'
  import { color } from 'framer-motion';
  
  
  export default function Products() {
    const images = [
      {
        url: '#',
        src: 'babykeem.jpg',
        hoverSrc: 'haut_rose.jpg',
        description: 'Haut Rose Dentelle',
    },
      {
        url: '#',
        src: 'babykeemOrange.jpg',
        hoverSrc: 'ensembleOrangeMarron.jpg',
        description: 'Robe orange/marron',
      },
      {
        url: '#',
        src: 'haut_rouge_model.jpg',
        hoverSrc: 'haut_rouge.jpg',
        description: 'Top à Fleurs',
      },
      {
        url: '#',
        src: 'model_rouge.jpg',
        hoverSrc: 'model_rouge_veste.jpg',
        description: 'Chemise Marron/Orange',
      }
    ];
  
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return (
      <>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 10 }}
          >
            {/* <Heading
              mt={7}
              fontWeight={1000}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color={'grey.300'}
              _hover={{ color: '#002E98' }}
            >
              Blue Subaru
            </Heading>
   */}
            <SimpleGrid columns={2} spacing={20} mt={20}>
              {images.map((image, index) => (
                <a
                  href={image.url}
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
                
                  <Image
                    src={hoveredIndex === index ? image.hoverSrc : image.src}
                    alt={`Image ${index + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  <Text mt={2} textAlign={'left'} fontSize="sm" color="black.600"
                  fontFamily={'Arial'}>
                  {image.description}
                </Text>
                      </motion.div>
                </a>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </>
    );
  }
  