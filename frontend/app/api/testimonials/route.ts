import { NextResponse } from "next/server";
import { connectDB } from "../../db";
import { ConnectionStates } from "mongoose";

export async function GET() {
const state= ConnectionStates

   const db=await connectDB()
   
    return db ? NextResponse.json({messsage:"connexted",state}): NextResponse.json({messsage:"not connected yetz"})
}