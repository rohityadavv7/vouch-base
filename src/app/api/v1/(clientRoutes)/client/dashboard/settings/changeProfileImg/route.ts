import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()


export async function POST(res:NextResponse){
    try{

        const session = await getServerSession(authOptions)

        if(!session?.user){
            return NextResponse.json({
                message:"Unauthorized access!",
                status:401
            })
        }

        const body = await res.json()

        const {profileUrl} = body;

        console.log("new profile-> ",profileUrl)

        await prisma.user.update({
            where:{
                id:session?.user?.id
            },
            data:{
                profileImg:profileUrl
            }
        })

        return NextResponse.json({
            messaeg:"Profile image updated!",
            status:200
        })
    }catch(error){
        console.log("Error in changig profile picture-> ",error)

        return NextResponse.json({
            message:"Could not change profile",
            status:500
        })
    }
}