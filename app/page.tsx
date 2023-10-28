"use client";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {fetchSubjects} from "@/api";
import {ISubject} from "@/types";
import Card from "@/components/Card";
import AddClass from "@/components/AddClass";
import {Box, Button, Heading, useDisclosure, HStack} from "@chakra-ui/react";


export default function Home() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = useRef()
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const getSubjects = async () => {
      const subjectsFromServer = await fetchSubjects()
      setSubjects(subjectsFromServer)
    }
    getSubjects()
  }, [])
  const handleClick = () => {
    onClose()
  }
  // @ts-ignore
  return (
     <>
       <HStack w={'100%'} py={6} justifyContent={'space-between'} alignContent={'center'}>
         <Heading as="h1" id="projects-section">
           All Available Subjects
         </Heading>
         <Button ref={btnRef} colorScheme='green' onClick={onOpen}>
           Create New Class
         </Button>
       </HStack>


       <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
          py={10}
       >
         {subjects.map((subject: ISubject) =>
            <Link
               key={subject.id}
               href={`/subjects/${subject.id}`}
            >
              <Card
                 title={subject.name}
                 description={subject.description}
              />
            </Link>
         )}
       </Box>
       <AddClass handleClick={handleClick} isOpen={isOpen} btnRef={btnRef}/>
     </>
  );
}
