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

            if(user){
                return user
            } else {
                return null
            }
            
        }
    })
 ],
 callbacks: {
   async jwt({ token, user }) {
     return { ...token, ...user };
   },
   async session({ session, token, user }) {
     session.user = token
     return session;
   },
 },
 pages:{
    signIn:"/login" , 
    error:'/login?error=cred'  , 
    
 }
}); 

export { handler as GET, handler as POST }