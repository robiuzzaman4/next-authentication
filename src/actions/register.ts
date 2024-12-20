/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { RegisterSchema } from "@/schema";
import { z } from "zod";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data";
import connectDb from "@/lib/db";

export async function register(payload: z.infer<typeof RegisterSchema>) {
  // validate fields
  const validatedFields = RegisterSchema.safeParse(payload);

  // check if fields are valid
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields",
    };
  }

  try {
    const { name, email, password } = validatedFields.data;

    const { db } = await connectDb();
    const collection = db.collection("users");

    // check if user already exists
    const existingUser = await getUserByEmail(email);

    // if user exists, return error message
    if (existingUser) {
      return {
        success: false,
        message: "Email already in use",
      };
    }

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user and return success response
    // const result = await User.create({
    //   name,
    //   email,
    //   password: hashedPassword,
    // });

    const result = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    if (result) {
      return {
        success: true,
        message: "Registration successful",
      };
    } else {
      return {
        success: false,
        message: "Failed to register",
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to register",
    };
  }
}
