import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function GET(res:NextResponse){
    try{
        const session = await getServerSession(authOptions)

        if(!session?.user){
            return NextResponse.json({
                message:"unauthorized Access!",
                status:401
            })
        }

        const profileData = await prisma.organisation.findMany({
            where:{
                organisationToUser:session?.user?.id
            },
            select:{
                name:true,
                location:true,
                description:true,
                testimonials:true,
                testimonialsCount:true,
                organisationToUser:true
            }
        })

        return NextResponse.json({
            message:"profile date fetched!",
            status:200,
            profileData
        })
    }catch(error){
        console.log("Error in dashboard/profile-> ", error)
        return NextResponse.json({
            message:"failed to fetch profile details",
            status:500
        })
    }
}