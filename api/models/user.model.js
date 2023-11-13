import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  avatar:{
    type:String,
    default:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
},{timestamps:true});

const User =mongoose.model("User",userSchema);

export default User;