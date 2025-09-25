import express from "express";
import {userList, TUserInfo } from "../../data/data";

export const storeData = express.Router();

//TODO for now we are using a fake user to be edited since we dont have database
const userInfo: TUserInfo = {
  name: "fake",
  email: "fake@gmail.com",
  password: '123456',
  phone: '111111111',
}

export const createUser = (name: string,email: string,password: string, phone:string) => {
  userInfo.name=name;
  userInfo.email=email;
  userInfo.password=password;
  userInfo.phone=phone;

  const foundUser = userList.find(user=> user.email === email)
  if (foundUser){
  return false
  }else {
    userList.push(userInfo) 
    return true
  }
}

storeData.post("/", (request, response) => {
  
  try {
      const {name, email, password, phone} = request.body;
      (createUser(name, email, password, phone)) ? response.status(200)
      .send(userInfo) :
      response.status(400).send("Error: Registration");

  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});