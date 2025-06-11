import { NextResponse } from "next/server";
import {  PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

export async function POST(res:NextResponse) {
    try{
        
        const body = await res.json();

        const{author,content,rating,profileImg,orgId}  = body;

        if(!author || !content || !rating || !profileImg || !orgId){
            return NextResponse.json({
                message:"All fields are required",
                status: 400
            })
        }  
        
        const getOrgDetails = await prisma.organisation.findFirst({
            where:{
                id: orgId
            }
        })

        if(!getOrgDetails){
            return NextResponse.json({
                message:"Organisation not found",
                status: 404
            })
        }

        const newTestimonial = await prisma.testimonial.create({
            data:{
                author: author,
                content: content,
                rating: rating,
                profileImg: profileImg,
                testimonialToOrg: getOrgDetails.id
            }
        })

        console.log("New Testimonial-> ", newTestimonial);
        
        await prisma.organisation.update({
            where: {
                id: getOrgDetails.id
            },
            data: {
                testimonialsCount:getOrgDetails.testimonialsCount + 1,
                testimonials:{
                    connect: {
                        id: newTestimonial.id
                    }
                }
            }
        })

        return NextResponse.json({
            message:"testimonial added successfully",
            status: 200,
            newTestimonial
        })
    }catch(error){
        console.log("Error in POST /api/v1/testimonial", error);
        return NextResponse.json({
            message:"could not add testimonial",
            status: 500
        })
    }
}