import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers"; 
import { auth } from "./lib/auth";

export async function proxy(request) {
   const session = await auth.api.getSession({
    headers: await headers()
   }) 
   console.log('session', session);
   
   if(!session){
    return NextResponse.redirect(new URL('/auth/login', request.url))
   }

}

export const config = {
    matcher: ['/properties','/properties/:path',]
}