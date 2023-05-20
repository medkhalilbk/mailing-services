import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
 providers:[
    CredentialsProvider({
        name:"Password",
        credentials: {
            username:{label:"Username",type:"text",placeholder:"username"},
            password:{label:"Password",type:"password",placeholder:"password"}
        } , 
        async authorize(credentials,req){
            const res = await fetch("http://localhost:8080/mailing/login" , {
                method:"POST",
                headers: {"Content-Type":"application/json" } , 
                body : JSON.stringify({
                    username:credentials?.username , password:credentials?.password 
                })
            })
            const user = await res.json()
            console.log(user)
            if(user){
                return user
            } else {
                return null
            }
            
        }
    })
 ]
})

export { handler as GET, handler as POST }