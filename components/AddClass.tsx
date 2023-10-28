import React, {useEffect, useState} from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
  VStack
} from "@chakra-ui/react";
import {createClass, fetchSubjects} from "@/api";
import {useFormik} from "formik";
import {IClass} from "@/types";
import * as Yup from "yup";

const AddClass = ({isOpen, btnRef, handleClick}: any) => {
  const toast = useToast()
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const getSubjects = async () => {
      const subjectsFromServer = await fetchSubjects()
      setSubjects(subjectsFromServer)
    }
    getSubjects()
  }, [])
  const formik = useFormik({
    initialValues: {
      name: "",
      description: '',
      startDate: "2023-08-24",
      endDate: "2023-09-30",
      location: 'physical',
      subjectId: 1
    },
    onSubmit: async (values: IClass) => {
      createClass(values)
         .then(() => {
           toast({
             position: 'top-right',
             title: 'Class created.',
             status: 'success',
             duration: 4000,
             isClosable: true,
           })
           formik.resetForm()
           handleClick()
         })
         .catch(() => {
           toast({
             position: 'top-right',
             title: 'Try Again.',
             status: 'error',
             duration: 4000,
             isClosable: true,
           })
         })
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      subjectId: Yup.string().required("Required"),
    }),
  });
  return (
     <Drawer
        isOpen={isOpen}
        placement='right'
        finalFocusRef={btnRef}
     >
       <DrawerOverlay/>
       <DrawerContent>
         <DrawerHeader>Create new Class</DrawerHeader>

         <DrawerBody>
           <form
              id={'my-form'}
              onSubmit={(event) => {
                event.preventDefault();
                formik.handleSubmit();
              }}
           >
             <VStack spacing={4}>
               <FormControl isInvalid={formik.touched.name && formik.errors.name}
               >
                 <FormLabel htmlFor="name">Class Name</FormLabel>
                 <Input
                    id="name"
                    {...formik.getFieldProps("name")}
                 />
                 <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
               </FormControl>
               <FormControl
                  isInvalid={formik.touched.description && formik.errors.description}
               >
                 <FormLabel htmlFor="description">Description</FormLabel>
                 <Textarea
                    id="description"
                    height={100}
                    {...formik.getFieldProps("description")}
                 />
                 <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
               </FormControl>
               <FormControl isInvalid={formik.touched.subjectId && formik.errors.subjectId}>
                 <FormLabel htmlFor="subjectId">Subject</FormLabel>
                 <Select id="subjectId"
                         {...formik.getFieldProps("subjectId")}
                         name="subjectId"
                 >
                   {
                     subjects.map((s) => (<option key={s.id} value={s.id}>
                       {s.name}
                     </option>))
                   }
                 </Select>
               </FormControl>
               <FormControl isInvalid={formik.touched.location && formik.errors.location}>
                 <FormLabel htmlFor="location">Location</FormLabel>
                 <Select id="location"
                         {...formik.getFieldProps("location")}>
                   <option value="physical">Physical</option>
                   <option value="online">
                     Online
                   </option>
                 </Select>
               </FormControl>
             </VStack>
           </form>
         </DrawerBody>

         <DrawerFooter>
           <Button type='submit' mr={3} colorScheme="green" form='my-form'>
             Save
           </Button>
           <Button variant='outline' onClick={handleClick}>
             Cancel
           </Button>
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
  );
};

export default AddClass;