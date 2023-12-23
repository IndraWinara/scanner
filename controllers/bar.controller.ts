import { NextFunction, Request, Response } from "express";
import Bar from "../models/bar.model";




interface IRegisterData {
    item_id : string;
    name : string;
    category : string,
    harga : string
}

export const registerBar = async (req: Request, res: Response, next : NextFunction)=>{
    try {
        const {item_id,name,category,harga} = req.body
        const payload : IRegisterData = {item_id,name,category,harga}
        await Bar.create(payload)
        return res.status(200).json({
            success : true,
            message : 'Success Register Data'
        })
    } catch (error : any) {
        return res.status(500).json({
            success : false,
            message : `Error Register Data ${error.message}`
        })
    }
}


export const checkBar = async (req: Request, res: Response, next : NextFunction)=>{
    try {
        const {item_id} = req.body

        const data = await Bar.findOne({item_id})
        if(!data) {
            return res.status(401).json({
                success : false,
                message : `Item not found`
            })
        }

        return res.status(200).json({
            success : true,
            data
        })
    } catch (error : any) {
        return res.status(500).json({
            success : false,
            message : `Error Register Data ${error.message}`
        })
    }
}