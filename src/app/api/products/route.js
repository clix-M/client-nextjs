import dbConnect from "@/backend/config/dbConnect";
import { NextResponse } from "next/server";
import Product from "@/backend/model/Product";

export const runtime = 'nodejs';


export async function GET (req) {
    try{

        await dbConnect()

        const products = await Product.find()

        return new NextResponse(JSON.stringify(products),{status: 200})

    }catch(err){
        return new NextResponse("Database Error",{status: 500})
    }
} 


