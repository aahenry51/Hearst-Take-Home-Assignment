type TUserInfoList = Array<TUserInfo>

export type TUserInfo = {
    name: string,
    email: string,
    password: string,
    phone: string,
}

export const userInfo: TUserInfo = {
    name: "First Last",
    email: "First@gmail.com",
    password: '123',
    phone: '1 (234) 567-8910',
}

export const userList: TUserInfoList = [{
    name: "First Last",
    email: "First@gmail.com",
    password: '123',
    phone: '1 (234) 567-8910',
}]