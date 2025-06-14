import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getToken } from 'next-auth/jwt'
 

export async function middleware(req:NextRequest) {
  try{
    console.log("in middleware")
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
  }catch(error){
    console.log("error in middleware-> ", error)
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*','/home'],
}