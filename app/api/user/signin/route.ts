import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/model/userModel";
import { dbConfig } from "@/app/utils/dbConfig";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const hashed = await bcrypt.compare(password, hash);
    const emailExist = await myUserModel.findOne({ email });
    if (emailExist) {
      if (hashed) {
        return NextResponse.json({
          message: "Logged in succefully",
          status: 200,
          data: emailExist,
        });
      } else {
        return NextResponse.json({
          message: "Error Reading Password",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error getting user",
        status: 400,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
    });
  }
};
