const Contact = require('../models/contactModel');
const mongoose = require('mongoose');


const getContact = async(req,res) => {
    const {id} = req.params;
    const userId = new mongoose.Types.ObjectId(req.user.id);
    if(id){
        const contact = await Contact.findById(id);
        if(contact.user_id === userId){
            return res.status(200).json(contact);
        }
        return res.status(400).json({error:"No contact found!"});
    }
    const contacts = await Contact.find({user_id:userId});
    res.status(200).json(contacts)
}

const deleteContact = async(req,res) => {
    const {id} = req.params;
    const userId = new mongoose.Types.ObjectId(req.user.id);
    
    const contact = await Contact.findById(id);
    if(contact.user_id === userId){
        await Contact.findByIdAndDelete(id);
        return res.status(200).json({message:"Contact deleted successfully!"})
    }
    res.status(404).json({error:"No contact found with the given id!"});
}

const createContact = async(req,res) => {
    const contact = await Contact.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        user_id:req.user.id})
    
        if(contact){
            return res.status(201).json(contact);
        }
    res.status(400).json({message:"Something went wrong!"});
}


module.exports = {
    getContact,
    createContact,
    deleteContact
}