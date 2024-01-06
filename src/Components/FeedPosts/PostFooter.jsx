import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/Contacts";
import { useState } from "react";

function PostFooter() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10 }>
      <Flex gap={4} mt={4}>
        <Box onClick={handleClick} cursor={"pointer"} fontSize={18}>
          {liked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"} mt={2}>
        {likes} Likes
      </Text>
      <Flex gap={1} mt={1}>
        <Text fontWeight={700} fontSize={"sm"}>
          John Doe
        </Text>
        <Text fontSize={"sm"} fontWeight={400}>
          Nice tutorial! Thanks.
        </Text>
      </Flex>
      <Text fontSize={"sm"} color={"gray"} mt={1} cursor={"pointer"}>
        View all {comments} comments.
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
        mt={1}
      >
        <InputGroup size="sm">
          <Input
            variant={"flushed"}
            placeholder="Add a comment..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{
                color: "white",
              }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;
