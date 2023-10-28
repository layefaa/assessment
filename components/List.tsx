import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";
import { AtSignIcon, TimeIcon } from '@chakra-ui/icons'
import {IClass} from "@/types";
const List = ({ name, description,startDate, endDate, location
                // imageSrc
              }: IClass) => {
  return (
     <VStack bg="gray.100" w="100%" color="black" borderRadius={'lg'}>
       <HStack w={'100%'}>
         <VStack w={"30%"} h={"100%"} >
           <Image h={"100%"} alt={'image'} src={'https://assignmentpoint.com/wp-content/uploads/2019/10/studying-smart.jpg'}  borderRadius={'lg'}/>
         </VStack>
         <VStack w={'70%'} h={"100%"}>
           <VStack p="4" py={'2'}  h={"70%"}  w="100%" alignItems={'flex-start'}>
             <Heading as="h4" size='md'>{name}</Heading>
             <Text opacity={.7} noOfLines={1} >{description}</Text>
           </VStack>
           <HStack w={"100%"}  h={"30%"} p="4" py={'2'} justifyContent={'space-between'} justifySelf={'self-end'} alignSelf={'start-end'}>
             <Text color={'green.500'}>
               <AtSignIcon mr={1} boxSize={4} color={'green.500'}></AtSignIcon>
               {location}
             </Text>
             <Text color={'red.500'}>
               <TimeIcon mr={1} boxSize={4} color={'red.500'}></TimeIcon>
               {startDate} to {endDate}
             </Text>
           </HStack>
         </VStack>


       </HStack>



     </VStack>
  );
};

export default List;
