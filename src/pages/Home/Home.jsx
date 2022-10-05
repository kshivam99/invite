import React from "react";
import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import { HomeImg } from "../images";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="#F6F2FF"
      width="100vw"
      minHeight="100vh"
      paddingTop="50px"
    >
      <Box width="80%" marginBottom="30px">
        <Heading
          fontSize={{ base: "36px", lg: "64px" }}
          lineHeight={{ base: "36px", lg: "64px" }}
          textAlign="center"
        >
          Imagine if
          <Text bgGradient="linear(to-t, #8456EC, #E87BF8)" bgClip="text">
            Snapchat
          </Text>
          had events
        </Heading>
        <Text
          color="#4F4F4F"
          size={{ base: "16px", lg: "24px" }}
          width={{ base: "321px", md: "521px" }}
          margin="16px auto"
        >
          Easily host and share events with your friends across any social
          media.
        </Text>
      </Box>
      <Image
        src={HomeImg}
        alt=""
        width={{ base: "165px", md: "311px", lg: "440px" }}
        marginBottom="20px"
      />
      <Link to="/create">
        <Button
          fontSize={{ base: "16px", md: "20px" }}
          width={{ base: "187px", md: "320px" }}
          height={{ base: "50px", md: "55px" }}
          bgGradient="linear(to-r, #8456EC, #E87BF8)"
          color="#fff"
          margin="20px 0"
        >
          🎉 Create my event
        </Button>
      </Link>
    </Box>
  );
}

export default Home;
