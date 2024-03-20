import { Category } from "@prisma/client";
import prismaClient from "../../prisma";

interface categoryRequest{
    name:string;
}

export class CreateCategoryService{
    async execute({ name}:categoryRequest){

        if(name ===''){
            throw new Error('Name incorrect')
        }
        
        const category = await prismaClient.category.create({
            data:{
               name:name,

            },
            select:{
                id:true,
                name:true,
            }
        })
        return category;
    }
}

