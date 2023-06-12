import  dbConnect  from "@/backend/config/dbConnect";
import { NextResponse } from "next/server";
import Product from "@/backend/model/Product";

export const runtime = 'nodejs';


export async function GET (req, {params}) {

    const {id} = params;

    try{

        await dbConnect()

        const product = await Product.findById(id)

        return new NextResponse(JSON.stringify(product),{status: 200})

    }catch(err){
        return new NextResponse("Database Error",{status: 500})
    }
} 