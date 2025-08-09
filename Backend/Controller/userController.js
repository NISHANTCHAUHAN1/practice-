import User from "../Model/userModel.js"
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";


export const registerUser = async(req, res) => {
    try {
        const {firstName,lastName, email, password } = req.body; 

        let user = await User.findOne({email});
        if(user) return res.status(400).json({message: "Already have an account with this email"});

        const hashPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            firstName, lastName, email, password: hashPassword
        })
        generateToken(user._id, res);
        res.status(200).json({msg: "User Register SuccessFully"});
    } catch (error) {
        res.status(500).json({ error: error.message, stack: error.stack });
    }
}


export const create = async(req, res) => {
    try {
        const userData = new User(req.body);

        if(!userData) {
            return res.status(404).json({msg: "User data not found"});
        }

        await userData.save();
        res.status(200).json({msg: "User created successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if(!userData) {
            return res.status(400).json({msg: "User Data not found"});
        }

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist) {
            return res.status(400).json({msg: "User not found"});
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }

        await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msg: "User Data Update SuccessFully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist) {
            return res.status(404).json({msg: "User Not found "});
        }

        await userExist.deleteOne();
        // await User.findByIdAndDelete(id);
        res.status(200).json({msg: "Delete SuccessFully "});
    } catch (error) {
        res.status(500).json({error: error});
    }
}