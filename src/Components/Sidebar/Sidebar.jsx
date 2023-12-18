import { Box, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom/dist";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/Contacts";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: 2, md: 4 }}
      top={0}
      left={0}
      position={"sticky"}
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
          pl={4}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5}>
          <Tooltip
            hasArrow
            label="Home"
            fontSize="md"
            placement="right"
            ml={3}
            openDelay={500}
            display={{ base: "block", md: "none" }}
            size={"sm"}
          >
            <Link
              display={"flex"}
              to="/"
              as={RouterLink}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              p={2}
            >
              {" "}
              <AiFillHome size={"24px"} />
              <Text display={{ base: "none", md: "block" }}>Home</Text>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Search"
            fontSize="md"
            placement="right"
            ml={3}
            openDelay={500}
            display={{ base: "block", md: "none" }}
            size={"sm"}
          >
            <Link
              display={"flex"}
              to="/"
              as={RouterLink}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              p={2}
            >
              <SearchLogo />
              <Text display={{ base: "none", md: "block" }}>Search</Text>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Notifications"
            fontSize="md"
            placement="right"
            ml={3}
            openDelay={500}
            display={{ base: "block", md: "none" }}
            size={"sm"}
          >
            <Link
              display={"flex"}
              to="/"
              as={RouterLink}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              p={2}
            >
              <NotificationsLogo />
              <Text display={{ base: "none", md: "block" }}>Notifications</Text>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Create"
            fontSize="md"
            placement="right"
            ml={3}
            openDelay={500}
            display={{ base: "block", md: "none" }}
            size={"sm"}
          >
            <Link
              display={"flex"}
              to="/"
              as={RouterLink}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              p={2}
            >
              <CreatePostLogo />
              <Text display={{ base: "none", md: "block" }}>Create</Text>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Profile"
            fontSize="md"
            placement="right"
            ml={3}
            openDelay={500}
            display={{ base: "block", md: "none" }}
            size={"sm"}
          >
            <Link
              display={"flex"}
              to="/"
              as={RouterLink}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              gap={4}
              p={2}
            >
              <CgProfile size={"24px"} />
              <Text display={{ base: "none", md: "block" }}>Profile</Text>
            </Link>
          </Tooltip>
        </Flex>
        <Tooltip
          hasArrow
          label="Logout"
          fontSize="md"
          placement="right"
          ml={3}
          openDelay={500}
          display={{ base: "block", md: "none" }}
          size={"sm"}
          mt={"auto"}
        >
          <Link
            display={"flex"}
            to="/"
            as={RouterLink}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={4}
            p={2}
            mt={"auto"}
          >
            <BiLogOut size={"24px"} />
            <Text display={{ base: "none", md: "block" }}>Logout</Text>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
