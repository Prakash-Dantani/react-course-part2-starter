export interface User{
    name:string,
    userId : number
}

interface Login{
    type :'LOGIN',
    name:string,
}

interface Logout {
    type :'LOGOUT'
}

export type LoginAction = Login | Logout;

const authReducer = (state :string, action:LoginAction):string =>{
    if(action.type === "LOGIN") return action.name;
    if(action.type === "LOGOUT") return '';
    return state;
}

export default authReducer;