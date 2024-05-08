import { Container, VStack, Heading, Stat, StatLabel, StatNumber, StatGroup, Box } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Business Dashboard
        </Heading>
        <StatGroup>
          <Stat>
            <Box display="flex" alignItems="center">
              <Icon as={FaShoppingCart} mr={2} w={8} h={8} />
              <Box>
                <StatLabel>Sales</StatLabel>
                <StatNumber>1,234</StatNumber>
              </Box>
            </Box>
          </Stat>
          <Stat>
            <Box display="flex" alignItems="center">
              <Icon as={FaDollarSign} mr={2} w={8} h={8} />
              <Box>
                <StatLabel>Revenue</StatLabel>
                <StatNumber>$50,000</StatNumber>
              </Box>
            </Box>
          </Stat>
          <Stat>
            <Box display="flex" alignItems="center">
              <Icon as={FaUsers} mr={2} w={8} h={8} />
              <Box>
                <StatLabel>Customers</StatLabel>
                <StatNumber>300</StatNumber>
              </Box>
            </Box>
          </Stat>
        </StatGroup>
      </VStack>
    </Container>
  );
};

export default Index;
