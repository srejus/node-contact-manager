const Contact = require('../models/contactModel');

const getContact = (req,res) => {
    const {id} = req.params;
    if(id){
        return res.status(200).json({message:"Getting single Contact"});
    }
    res.status(200).json({message:"Getting all contacts"})
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
    createContact
}