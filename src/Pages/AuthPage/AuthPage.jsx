import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={650} alt="phone image" />
        </Box>
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
        </VStack>
      </Container>
    </Flex>
  );
}

export default AuthPage;
