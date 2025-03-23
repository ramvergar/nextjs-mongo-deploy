import { connectDB } from "@/libs/mongodb"
import Pokemon from '@/models/user';
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB()

    const pokemons = await Pokemon.find()
    return NextResponse.json(pokemons)
}

export async function POST(request){
    await connectDB()
    const data = await request.json() 

    const pokemons = await Pokemon.create(data)
    return NextResponse.json(pokemons)
}