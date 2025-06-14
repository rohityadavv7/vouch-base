import { NextRequest, NextResponse } from "next/server"

export async function GET(res:NextResponse){
    try{
        console.log("hi from admin")
        return NextResponse.json({
            message:"testing admin",
            status:200
        })
    }catch(error){
        console.log("Error in admin route-> ", error)
        return NextResponse.json({
            message:"failed!",
            status:500
        })
    }
}