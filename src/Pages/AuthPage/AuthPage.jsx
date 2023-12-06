import { Box, Container, Flex, Image } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Box display={{ base: "none", md: "block" }}>
          <Image></Image>
        </Box>
      </Container>
    </Flex>
  );
}

export default AuthPage;
