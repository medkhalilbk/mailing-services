import { useToast } from "@chakra-ui/react"
export default function costumToast({status,message}) {

    const toast = useToast() 
  
    return (     toast({
                  title: `${status} :  ${message}`,
                  status: status,
                  isClosable: true,
                })) }