import axios from "axios"  
import { getSession } from "next-auth/react"
 
export async function createMailist({name,userId,token}){
   /*  const res = await axios.post("http://localhost:8080/mailing/import",{name:name,userId:userId},{
        headers:{
            Authorization:
        }
    })
            }) */

            try {  
               const res = await  axios.post('http://localhost:8080/mailing/import' , {name:name,userId:userId} , {headers:{Authorization:token}})
               return res 
            } catch (error) {
                console.log(error)
               return error
            }
}