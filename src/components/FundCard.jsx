import { Box, Text, VStack, useDisclosure } from "@chakra-ui/react";

const FundCard = ({ fundName, assets }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" onClick={onToggle} cursor="pointer">
      <VStack>
        <Text fontWeight="bold" fontSize="xl">
          {fundName}
        </Text>
        <Text fontSize="md">Assets: {assets}</Text>
        {isOpen && <Text mt={4}>Placeholder for net asset evolution chart.</Text>}
      </VStack>
    </Box>
  );
};

export default FundCard;
