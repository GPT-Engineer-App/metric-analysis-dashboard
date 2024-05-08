import { Container, VStack, Heading, Text } from "@chakra-ui/react";

const FundDashboard = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Investment Fund Dashboard
        </Heading>
        <Text>Interactive charts and key metrics will be displayed here.</Text>
        <Text>Placeholder for fund performance chart.</Text>
        <Text>Placeholder for asset allocation chart.</Text>
        <Text>Placeholder for risk indicators chart.</Text>
        <Text>Placeholder for liquidity chart.</Text>
      </VStack>
    </Container>
  );
};

export default FundDashboard;
