import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {

  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }
  });

  return NextResponse.json(task);
}

export async function PUT(request, {params}) {
  try {
    const updatedData = await request.json();
    const taskUpdated = await prisma.task.update({
      where: {
        id: Number(params.id)
      },
      data: updatedData
    })
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
  
}

export async function DELETE(request, {params}) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}