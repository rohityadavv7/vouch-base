import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(res:NextResponse){
    try{
        
        const session = await getServerSession(authOptions);

        if(!session){
            return NextResponse.json({
                message: "Unauthorized",
                status: 401
            });
        }

        const allOrgs = await prisma.organisation.findMany({
            where:{
                organisationToUser: session?.user?.id
            },
            include:{
                testimonials:true,

            }
        })

        console.log("All Organisations-> ", allOrgs);

        return NextResponse.json({
            message:"All Orgs fetched!",
            status:200,
            allOrgs
        })
    }catch(error){
        console.log("Error in GET /api/v1/organisation/getAllOrgs", error);
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
}