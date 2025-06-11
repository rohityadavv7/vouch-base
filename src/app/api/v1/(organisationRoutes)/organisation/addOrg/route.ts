import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(req:NextRequest, res:NextResponse) {
    try{

        const session = await getServerSession(authOptions)

        console.log("session in addOrg-> ",session)

        const clientId = session?.user?.id;

        if(!clientId){
            return NextResponse.json({
                message:"Unauthorized access",
                status:401
            })
        }

        const body = await req.json();
        
        const {name,description, location} = body;

        if(!name || !description || !location){
            return NextResponse.json({
                message:"All fields are required",
                status: 400
            })
        }

        
        const newOrganisation = await prisma.organisation.create({
            data:{
                name:name,
                description:description,
                location:location,
                organisationToUser:clientId
            }
        })

        console.log("New Organisation:", newOrganisation);

        return NextResponse.json({
            message: "Organisation added successfully",
            status: 200,
            newOrganisation
        })

    }catch(error){
        console.log("ERROR in post /api/v1/organisation/addOrg", error);
        return  NextResponse.json({
            message:"Failed to add organisation",
            status:500
        })
    }
    
}