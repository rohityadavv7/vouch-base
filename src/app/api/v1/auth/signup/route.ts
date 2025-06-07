import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req:NextRequest){
    try{
        const body = await req.json();
        
        // console.log("Request body:", body);

        const {username,email, password,} = body;

        const hashedPassword = await hash(password, 10);
        // console.log("Hashed Password", hashedPassword);

        const newUser = await prisma.user.create({
            data:{
                username: username,
                email:email,
                password:hashedPassword
            }
        })

        return NextResponse.json({
            message: "User signed up successfully",
            status: 200,
            newUser
        })
    }catch(error){
        console.log("Error in POST /api/v1/auth/signup", error);
        return NextResponse.json({
            message:"Internal Server Error",
            status:500
        })
    }
}