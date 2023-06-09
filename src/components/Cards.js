import {
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
      <CardBody>
        <Image src={imageSrc} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Cards;