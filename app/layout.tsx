'use client'
import './globals.css'
import {Providers} from "./providers";
import {Box, HStack, VStack} from "@chakra-ui/react";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
     <body>
     <Providers>
       <VStack
          color="black"
       >
         <VStack maxWidth="1280px" minHeight="100vh">
           {children}
         </VStack>
       </VStack>
     </Providers>
     </body>
     </html>
  )
}
