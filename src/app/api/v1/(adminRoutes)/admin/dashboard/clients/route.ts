import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()

export async function GET(res:NextResponse){
    try{
        const session = await getServerSession(authOptions);

        console.log(session)
        
        if(session?.user.roleType !== "ADMIN"){
            return NextResponse.json({
                message:"Protected route for ADMIN only",
                status:403
            })
        }

        const allClients = await prisma.user.findMany();

        const finalRes = allClients.filter((x)=> x.role!=="ADMIN")

        console.log("All clients-> ", allClients)

        return NextResponse.json({
            message:"All clients fetched",
            status:200,
            finalRes
        })

    }catch(error){
        console.log("ERROR in admin/dashboard/clients-> ",error)
        return NextResponse.json({
            message:"Failed to get clients",
            status:500
        })
    }
}