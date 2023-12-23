import { create } from "zustand";

interface AuthProps{
    user:string;
    login:(username:string)=>void;
    logout:()=>void;

}

const ZustandAuth = create<AuthProps>(set => ({
    user:"",
    login:username=>set(() => ({user:username})),
    logout:()=>set(() => ({user: ""}))
}));

export default ZustandAuth;