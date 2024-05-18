

const getContact = (req,res) => {
    const {id} = req.params;
    if(id){
        return res.status(200).json({message:"Getting single Contact"});
    }
    res.status(200).json({message:"Getting all contacts"})
}

const createContact = (req,res) => {
    const {name,phone,email} = req.body;
    res.status(200).json({message:"Contact created successfully"})
}


module.exports = {
    getContact,
    createContact
}