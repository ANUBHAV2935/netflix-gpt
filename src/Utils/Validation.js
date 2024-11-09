export const checkValidate =(email,password,name)=>{
    const isemailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const ispasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    //const isname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isemailValid) return "Email is not valid";
    if(!ispasswordValid) return "Password is not valid";
    //if(!isname) return "Full name is not valid";

    return null;

}