const User = require("../model/user");

exports.doRegistration = async (req,res) => {
    const response = {
        errorMsg : null,
        successMsg : null,
    }
    try{
        const reqName = req.body.name;
        const reqEmail = req.body.email;
        const reqPassword = req.body.password;
        const isEnabled = true;

        const newUser = await User.User.create({
            name : reqName,
            email : reqEmail,
            password : reqPassword,
            enabled : isEnabled,
            createdAt : new Date()
        })
        
        console.log(newUser);
        response.successMsg = "User Successfully Created.";
        res.status(200).json(response);
    }catch(e) {
        console.log(e)
        response.successMsg = null;
        response.errorMsg = "Something went wrong."
        res.status(200).json(response);
    }
}