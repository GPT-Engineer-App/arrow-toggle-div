import React from "react";
import { Flex, Box, Text, Collapse, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Index = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box className="relative">
      <Box>
        <Text color="#012539" fontSize="20px" fontWeight="700">
          Highlights
        </Text>
        <Collapse in={isOpen} startingHeight={220}>
          <Flex direction="row" gap="22px" mt="10px" wrap="wrap">
            {/* Rest of the content */}
          </Flex>
        </Collapse>
      </Box>
      <Flex justify="center" position="absolute" bottom="-15px" w="full" py="2" bgGradient="linear(to-b, transparent, #fff)">
        <IconButton aria-label="Toggle highlights" variant="ghost" onClick={onToggle} icon={isOpen ? <FaChevronUp /> : <FaChevronDown />} />
      </Flex>
    </Box>
  );
};

export default Index;
