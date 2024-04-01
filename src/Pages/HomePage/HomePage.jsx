import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../Components/SuggestedUsers/SuggestedUsers";

function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          maxW={"300px"}
          display={{ base: "none", md: "block" }}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
}

export default HomePage;
