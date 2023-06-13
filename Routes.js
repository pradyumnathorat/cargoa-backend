const express = require('express');
const routes = express.Router();
const checkToken = require('./verifyToken')
const APIs = require('./controllers')

routes.post('/register/manufacture', APIs.userPost)
routes.post('/register/transporter', APIs.user2Post)
routes.post('/login/manufacture', APIs.userLogin)
routes.post('/login/transporter', APIs.user2Login)
routes.get( '/get/transporter', checkToken , APIs.getTransporters)
routes.get( '/get/manufacturer', checkToken , APIs.getOneManufacturer)
routes.post( '/post/manufacturer', checkToken , APIs.manufactureMsgPost)
routes.get( '/get/manufacturer/msg', checkToken , APIs.getAllMessages)
routes.get( '/get/manufacturer/:_id', checkToken , APIs.getOneDetails)
routes.get( '/get/transporter/:_id', checkToken , APIs.getOneDetail2)
routes.post( '/post/transporter', checkToken , APIs.TransporterMsgPost)
routes.get( '/get/transporter/msg', checkToken , APIs.getAllMessagesTra)

module.exports = routes;