import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()

export async function GET(res:NextResponse){
    try{
        const session = await getServerSession(authOptions);

        console.log("session in dashbaord/testimonials-> ", session);

        const orgAndTestimonialsDetails = await prisma.organisation.findMany({
            where:{
                organisationToUser : session?.user?.id
            },
            select:{
                name:true,
                testimonials:true,
                testimonialsCount:true
            }
        })

        console.log("testimonial details -> ", orgAndTestimonialsDetails)

        return NextResponse.json({
            message:"testimonials fetched! ",
            status:200,
            orgAndTestimonialsDetails
        })


    }catch(error){
        console.log("Error in getting testimonials for dashboard-> ",error)
        return NextResponse.json({
            message:"failed to get testimonials",
            status:500
        })
    }
}