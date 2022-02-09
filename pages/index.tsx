import React from "react";
import {
  Container,
  VStack,
  HStack,
  Center,
  Box,
  Button,
  Image,
  IconButton,
  Link
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaRedditSquare,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <Container maxW="full" h="100vh" p={0} bgColor='gray.800'>
      <Center h="100vh" color="white">
        <VStack spacing={30} align={"center"}>
          <Box>
            <Image
              src="https://storage.cloud.google.com/subeo-3de06.appspot.com/egg.gif"
              alt="Egg changing color"
            />
          </Box>
          <Link href={'https://discord.gg/5Gv3Tsx8UV'} isExternal>
          <Button  bgColor="gray.700" color="#7289DA" leftIcon={<FaDiscord />}>
            Join Discord
          </Button>
          </Link>
          <HStack>
            <IconButton
              size={"md"}
              variant="none"
              colorScheme="white"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<FaFacebook />}
            />
            <IconButton
              variant="none"
              colorScheme="white"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<FaInstagram />}
            />
            <IconButton
              variant="none"
              colorScheme="white"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<FaRedditSquare />}
            />
            <IconButton
              variant="none"
              colorScheme="white"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<FaTwitter />}
            />
          </HStack>
        </VStack>
      </Center>
    </Container>
  );
};

export default Home;
