import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex gap={10} alignItems={"center"} justifyContent={"center"}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={680} alt="phone image" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="app store" />
              <Image src="/microsoft.png" h={"10"} alt="google play" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
