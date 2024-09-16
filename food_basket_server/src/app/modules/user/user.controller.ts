import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.servies";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const creteUser=catchAsync((req:Request,res:Response)=>{
const result= UserService.createUser(req.body)
sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"User created successfully",
    data:result
})
})



export const UserController={
    creteUser
}