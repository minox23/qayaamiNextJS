// app/api/users/route.ts
import { NextResponse } from "next/server";
import { db } from "@server/lib/db"; // Adjust the path to where you put db.ts

// GET request to fetch users
export async function GET() {
  try {
    const User = await db.selectFrom("User").selectAll().execute();

    return NextResponse.json(User);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, emailVerified, image, id } = await request.json();
    const [user] = await db
      .insertInto("User")
      .values({email, emailVerified, image, name, id})
      .returningAll()
      .execute();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
