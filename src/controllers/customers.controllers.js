import { Users } from "../models/customerSchema.js";

export const getUsers = async(req,res)=>{
    try{
        const result = await Users.find()
        res.status(200).json(result)
    }catch(error){
        res.status(404).sendStatus(404)
        console.error(error)
    }
}

export const createUsers = async (req, res) => {
  try {
    const users = Users(req.body);
    await users.save();
    res.status(201).sendStatus(201);
  } catch (error) {
    if(error.errors){
      res.status(500).json(error.errors.password.properties);
    }else if(error.errorResponse.code){
      res.status(500).json(error.errorResponse.code);
    }else{
      res.status(500).sendStatus(500)
      console.log(error)
    }
  }
};


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findById(id);

    res.status(302).json(result);
  } catch (error) {
    console.error(error);
  }
};

export const setUsers = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    await Users.findByIdAndUpdate(id, newData);
    res.status(200).sendStatus(200)
  } catch (error) {
    res.status(304).sendStatus(304);
    console.error(error);
  }
};
