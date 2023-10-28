'use client'
import {Button, HStack, VStack} from "@chakra-ui/react";
import {useRouter} from 'next/navigation'

export default function Layout({
                                 children,
                               }: {
  children: React.ReactNode
}) {
  const router = useRouter();
  return (

     <VStack>

       <VStack maxWidth="1280px" minHeight="100vh">
         <HStack w={'100%'} maxWidth="1280px" p={8}>
           <Button
              type="button"
              colorScheme="blue"
              onClick={() => router.push('/')}
           >
             Back Home
           </Button>

         </HStack>
         {children}
       </VStack>
     </VStack>
  )
}
