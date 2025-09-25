import express from "express";
import {userList} from "../../data/data";

export const getData = express.Router();

getData.get("/", (request, response) => {
    

    try {
        const {email} = request.body;
        const user = userList.find(user=> user.email === email)
        const copyUser = {...user};
        user? response.status(200).send(copyUser) : response.status(400).send("Not found");
        
    } catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});