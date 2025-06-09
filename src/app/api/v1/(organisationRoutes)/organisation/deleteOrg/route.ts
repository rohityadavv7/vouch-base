import { NextResponse } from "next/server";
import {PrismaClient} from "@/generated/prisma";

const prisma = new PrismaClient();

export async function DELETE(res:NextResponse){
    try{
        const body = await res.json();

        const {orgId} = body;

        if(!orgId){
            return NextResponse.json({
                message:"Orgdanisation Id is required",
                status: 400
            })
        }

        const orgDetails = await prisma.organisation.findFirst({
            where: {
                id: orgId
            }
        });

        await prisma.organisation.delete({
            where:{
                id:orgId
            }
        })

        return NextResponse.json({
            message:"Organisation deleted!",
            status:200,
            orgDetails
        })

    }catch(error){
        console.log("Error in DELETE /api/v1/organisation/deleteOrg", error);
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
}