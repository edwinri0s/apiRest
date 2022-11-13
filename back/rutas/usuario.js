const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    apellido:String,
    email: String,
    telefono: String,
    direccion:String,
    idusuario: String
   
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

//Agregar usuario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion:req.body.direccion,
        idusuario: req.body.idusuario

    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizausuario', (req, res) => {
    
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        apellido:req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion:req.body.direccion

    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarusuario', (req, res) => {
    
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

