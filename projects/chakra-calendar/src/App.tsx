import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid,
  Heading,
  Spacer,
  Center,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid height="100vmin" p={10} width="100vmin">
        <ColorModeSwitcher justifySelf="flex-end" />

        <Heading as='h1' size='xl' m='0'>Calendar of Code</Heading>
        {/* <Heading as='h3' size='md' m='2'>A Celebration of Advent of Code</Heading> */}

        <Spacer m='0'></Spacer>

        <SimpleGrid columns={5} spacing={4} color='white'>
          <Box bg='tomato' height='80px'>
            <Center fontSize="4xl" width="100%" height="100%">01</Center>
            </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">02</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">03</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">04</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">05</Center>
          </Box>
          
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">06</Center>

          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">07</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">08</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">09</Center>
          </Box>
          <Box bg='tomato' height='80px'>
          <Center fontSize="4xl" width="100%" height="100%">10</Center>
          </Box>

          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>

          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box> 

          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box> 
        </SimpleGrid>

        {/* <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack> */}
      </Grid>
    </Box>
  </ChakraProvider>
)
