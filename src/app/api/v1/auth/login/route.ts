import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { log } from "console";

const prisma = new PrismaClient();

export async function POST(req:NextRequest){
    try{
        const body = await req.json();

        // console.log("Request body:", body);

        const {email,password} = body;

        const loggedinUser = await prisma.user.findFirst({
            where: {
                email: email,
                password: password
            }
        })

        return NextResponse.json({
            message:"Logged in successfully",
            status: 200,
            loggedinUser
        })

    }catch(error){
        console.log("Error in POST /api/v1/auth/login", error);
        return NextResponse.json({
            message:"Internal Server Error",
            status: 500
        })
    }
}