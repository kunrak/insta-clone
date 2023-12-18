import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

function PostHeader() {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src="/img1.png" size={"sm"} alt="user profile pic" />
          <Flex fontSize={12} alignItems={"center"} gap={2}>
            Rakesh
            <Box>• 1w ago</Box>
          </Flex>
        </Flex>
        <Box cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{
              color: "white",
            }}
            transition={"0.2s ease-in-out"}
          >
            Unfollow
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default PostHeader;
