"use client"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast, 
} from '@chakra-ui/react';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import costumToast from '../components/toast';
import StepperCompoment from './stepper';
export default function SimpleCard() {
  const searchParams = useSearchParams();
  const [User, setUser] = useState("")
  const router = useRouter()
  const [Password, setPassword] = useState("")
  const Toast = useToast()
  const handleChangeUser = (event) => setUser(event.target.value)
  const handleChangePass = (event) => setPassword(event.target.value)
  const [Index, setIndex] = useState(0)
  let error = searchParams.get('error')
  const toast = useToast()
  useEffect(()=>{
  console.log(error)
  if(error){ 
    Toast({
      title:'Error',
      status:'error',
      isClosable:true ,
    })
  }
  console.log(Index)
},[error,Index]);
  
  return (
 <React.StrictMode> <Flex
 minH={'100vh'}
 align={'center'}
 justify={'center'}
 bg={useColorModeValue('gray.50', 'gray.800')}>
 <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
   <Stack align={'center'}>
     <Heading fontSize={'4xl'}></Heading>
    <StepperCompoment setIndex={setIndex} />
   </Stack>
   <Box 
     rounded={'lg'}
     bg={useColorModeValue('white', 'gray.700')}
     boxShadow={'lg'}
     p={8}>
     <Stack spacing={4}>
       <FormControl id="email">
         <FormLabel>Mailist Name</FormLabel>
         <Input  value={User}  onChange={handleChangeUser} type="text" />
       </FormControl>
       <FormControl id="password">
         <FormLabel>Added by :</FormLabel>
         <Input type="text" disabled value={'admin'} onChange={handleChangePass} />
       </FormControl>
       <Stack spacing={10}>

         <Button
           bg={'blue.400'}
           color={'white'}
           onClick={async () => { 
            toast({status:'success','title':"name saved", isClosable:true})
           }}
           _hover={{
             bg: 'blue.500',
           }}>
          Next
         </Button>
       </Stack>
     </Stack>
   </Box>
   <Text fontSize={'lg'} align={"center"} color={'gray.600'}>
       Created by <Link href='https://github.com/medkhalilbk'  color={'blue.400'}>medkhalilbk</Link> ✌️
     </Text>
 </Stack>
 
</Flex></React.StrictMode>
   
  );
}