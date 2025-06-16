import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function GET(){
    try{
        const session = await getServerSession(authOptions)

        if(session?.user?.roleType !== "ADMIN"){
            return NextResponse.json({
                message:"Protected route for Admin only",
                status:401
            })
        }

        const allOrgs = await prisma.organisation.findMany({})

        console.log("All orgs-> ",allOrgs)

        return NextResponse.json({
            message:"Orgs Data fetched!",
            status:200,
            allOrgs
        })
    }catch(error){
        console.log("Error in /admin/dashbaord/organisation-> ",error)
        return NextResponse.json({
            message:"failed to get organisations",
            status:500
        })
    }
}