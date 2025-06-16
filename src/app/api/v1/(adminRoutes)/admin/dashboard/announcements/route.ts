import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(res:NextResponse, req:NextRequest){
    try{
        const session = await getServerSession(authOptions);

        if(session?.user.roleType !== "ADMIN"){
            return NextResponse.json({
                message:"Protected route for admin only",
                status:401
            })
        }

        console.log("Sessiobn-> ",session)

        const body = await res.json()
        const {announcement} = body;

        console.log("data-> ",announcement)

        const admin = await prisma.user.findFirst({
            where:{
                id:session.user.id
            }
        })
        console.log("admin-> ", admin)

        const adminDetails = await prisma.user.update({
            where:{
                id:session.user.id
            },
            data:{
                adminAnnouncements:announcement
            }
        })

        return NextResponse.json({
            message:"Adnnouncement added",
            status:200,
            adminDetails
        })
    }catch(error){
        console.log("Error in /admin/dashboard/announcements->  ", error)

        return NextResponse.json({
            message:"failed to add announcement!",
            status:500
        })
    }
}