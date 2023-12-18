import { Box, Button, Flex, Image, Input, Link, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if(!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }

    navigate("/");
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />
          <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
          <Input placeholder="Password" fontSize={14} type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
          {!isLogin ?
            <Input placeholder="Confirm Password" fontSize={14} type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /> : null
          }
          <Button colorScheme="blue" w={"full"} size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          <Flex alignItems={"center"} justifyContent={"center"} gap={1} my={4} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} fontSize={14}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex gap={3} alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src="/google.png" w={5} alt="Google Logo" />
            <Text color={"blue.500"}>Continue with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={1} my={4} w={"full"}>
          <Text fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>
          <Link fontSize={16} ml={1} color={"blue.500"} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log In"}</Link>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm