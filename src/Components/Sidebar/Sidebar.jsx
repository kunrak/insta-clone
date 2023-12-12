import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom/dist";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/Contacts";

function Sidebar() {
    const side
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: 2, md: 4 }}
      top={0}
      left={0}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>
    </Box>
  );
}

export default Sidebar;
