import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(req:NextRequest, res:NextResponse) {
    try{


        const body = await req.json();
        
        const {name,description, location, email} = body;

        if(!name || !description || !location || !email){
            return NextResponse.json({
                message:"All fields are required",
                status: 400
            })
        }

        const checkClient = await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        console.log("clien details-> ", checkClient);

        if(!checkClient){
            return NextResponse.json({
                message: "Client not found!",
                status: 401
            });
        }

        
        const newOrganisation = await prisma.organisation.create({
            data:{
                name:name,
                description:description,
                location:location,
                organisationToUser:checkClient?.id
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