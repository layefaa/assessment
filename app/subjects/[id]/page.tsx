"use client";
import {fetchClassesRelatedToSubject, fetchSubject} from "@/api";
import {useEffect, useState} from "react";
import {IClass} from "@/types";
import {Box, Button, Heading, HStack} from "@chakra-ui/react";
import List from "@/components/List";

export default function Subjects({params}: {
  params: any
}) {
  const [data, setData] = useState([])
  const [subject, setSubject] = useState({})
  useEffect(() => {
    const getSubjectsWithClass = async () => {
      const dataFromServer = await fetchClassesRelatedToSubject(Number(params.id))
      setData(dataFromServer)
    }
    getSubjectsWithClass()
  }, [params.id]);

  useEffect(() => {
    const getSubject = async () => {
      const subject = await fetchSubject(Number(params.id))
      setSubject(subject)
    }
    getSubject()
  }, [params.id]);

  return (
     <>
       <HStack pb={6} justifyContent={'space-between'} alignContent={'center'}>
         <Heading as="h1">
           All Classes in {subject.name}
         </Heading>
       </HStack>
       <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
          p={8}
       >
         {data.map((d: IClass) => (
            <List key={d.id} {...d}/>
         ))}
       </Box>
     </>
  );
}
