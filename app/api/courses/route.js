import Courses from './data.json'
import { NextResponse } from 'next/server'
import {v4 as uuid4} from 'uuid'

export async function  GET(request){
    return NextResponse.json(Courses)
}

export async function POST(request){
    //const course = await request.json()
    const {title, description, level, link} = await  request.json()
    const Newcourse={
        id: uuid4(),
        title,
        description,
        level,
        link
    }
    Courses.push(Newcourse)
    return NextResponse.json(Courses)
}