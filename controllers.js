
const userModel = require('./models/userModel');
const transporterModel = require('./models/transporterModel');
const manufactureMsg = require('./models/manufactureMsg');
const transporterMsg = require('./models/transporterMsg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "RESTAPI"
const userPost = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (user) {
            res.status(208).json({ message: "User is already Register" })
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                const userData = await userModel.create({
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    password: hash
                })
                res.status(201).json({ message: "SignUp Succsess" })
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const user2Post = async (req, res) => {
    try {
        const user = await transporterModel.findOne({ email: req.body.email });
        if (user) {
            res.status(208).json({ message: "User is already Register" })
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                const userData = await transporterModel.create({
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    password: hash
                })
                res.status(201).json({ message: "SignUp Succsess" })
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(500).json({ message: "Unkown user" })
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({ message: err.message })
            }
            if (result) {
                const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '2h' })
                return res.status(200).json({
                    message: "Login successfull",
                    token: token
                })
            } else {
                return res.status(500).json({ message: 'Invalid Password' })
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const user2Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await transporterModel.findOne({ email: email });
        if (!user) {
            return res.status(500).json({ message: "Unkown user" })
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({ message: err.message })
            }
            if (result) {
                const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '2h' })
                return res.status(200).json({
                    message: "Login successfull",
                    token: token
                })
            } else {
                return res.status(500).json({ message: 'Invalid Password' })
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getTransporters = async (req, res) => {
    try {
        const transporters = await transporterModel.find();
        res.status(200).json(transporters)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneManufacturer = async (req, res) => {
    try {
        // console.log(req.user);
        const manufacturer = await userModel.findById({ _id: req.user.userId });
        res.status(200).json(manufacturer)
        console.log(manufacturer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneDetails = async (req, res) => {
    try {
        // console.log(req.user);
        const { _id } = req.params
        const Single = await manufactureMsg.findById({ _id: _id});
        res.status(200).json(Single)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const getOneDetail2 = async (req, res) => {
    try {
        // console.log(req.user);
        const { _id } = req.params
        const Single = await transporterMsg.findById({ _id: _id});
        res.status(200).json(Single)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAllMessages = async (req, res) => {
    try {
        // console.log(req.user);
        const msgs = await manufactureMsg.find({ transporter : req.user.userId});
        res.status(200).json(msgs)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAllMessagesTra = async (req, res) => {
    try {
        console.log(req.user.userId);
        const msgs = await transporterMsg.find();
        res.status(200).json(msgs)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const manufactureMsgPost = async (req, res) => {
    try {
        // console.log(req.user);
        const post = await manufactureMsg.create(
            { ...req.body, user: req.user.userId }
        );
        res.status(200).json(post)
        console.log(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const TransporterMsgPost = async (req, res) => {
    try {
        // console.log(req.user);
        const post = await transporterMsg.create(req.body);
        res.status(200).json({ message: "Order Confirm"})
        console.log(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



module.exports = { userPost,getOneDetail2 , userLogin, user2Post, user2Login, getTransporters, getOneManufacturer, manufactureMsgPost,getAllMessages ,getOneDetails ,TransporterMsgPost , getAllMessagesTra}