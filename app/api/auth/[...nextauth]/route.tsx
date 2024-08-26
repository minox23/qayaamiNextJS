import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        Google ({
            clientId: '',
            clientSecret: ''
    
        })
    ],
})

export {handler as GET, handler as POST}

// IN PROGRESS