import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function PUT(res:NextResponse){
    try{
        const body = await res.json();

        const{orgId,name,description,location} = body;

        if(!orgId){
            return NextResponse.json({
                message:"Organisation ID is required",
                status: 400
            })
        }

        const updatedOrgDetails = await prisma.organisation.update({
            where:{
                id: orgId
            },
            data:{
                name: name,
                description: description,
                location: location
            }
        });

        return NextResponse.json({
            message:"Organsiation details Updated!",
            status:200,
            updatedOrgDetails
        })
    }catch(error){
        console.log("Error in PUT /api/v1/organisation/editOrgDetails", error);
        return NextResponse.json({
            message:"Failed to update organisation details!",
            status:500
        })
    }
}