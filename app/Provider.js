"use client"
import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@chakra-ui/next-js'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' 
export default function Provider({ children }) {
    return   <ChakraProvider><SessionProvider>{children}</SessionProvider></ChakraProvider>
       
 
}