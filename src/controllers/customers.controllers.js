import { Customers } from "../models/customerSchema.js";

// export const getCustomers = async(req,res)=>{
//     try{
//         const result = await Customers.find()
//         res.status(200).json(result)
//     }catch(error){
//         res.status(404).sendStatus(404)
//         console.error(error)
//     }
// }

export const createCustomer = async (req, res) => {
  try {
    const customer = Customers(req.body);
    await customer.save();
    res.status(201).sendStatus(201);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.error(error);
  }
};

export const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Customers.findById(id);

    res.status(302).json(result);
  } catch (error) {
    console.error(error);
  }
};

export const setCustomer = async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    await Customers.findByIdAndUpdate(id, newData);
    res.status(200).sendStatus(200)
  } catch (error) {
    res.status(304).sendStatus(304);
    console.error(error);
  }
};
