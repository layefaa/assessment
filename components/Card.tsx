import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

// @ts-ignore
const Card = ({ title, description,
                // imageSrc
}) => {
  return (
     <VStack bg="gray.50" color="black" borderRadius={'lg'}>
       <HStack w="100%">
         <Image alt={'image'} src={'https://assignmentpoint.com/wp-content/uploads/2019/10/studying-smart.jpg'}  borderRadius={'lg'}/>
       </HStack>
       <VStack w={"100%"} p="4" alignItems={'flex-start'}>
         <Heading as="h4" size='md'>{title}</Heading>
         <Text opacity={.7}>{description}</Text>
         <Text>
           See more
         </Text>
       </VStack>
     </VStack>
  );
};

export default Card;
