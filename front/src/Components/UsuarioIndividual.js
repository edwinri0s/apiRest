import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function UsuarioIndividual({usuario}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])


    //Función para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data) 
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <h6>ID</h6>
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <h6>Nombre</h6>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <h6>Apellido</h6>
                        <li className="list-group-item">{usuario.apellido}</li>
                        <h6>Email</h6>
                        <li className="list-group-item">{usuario.email}</li>
                        <h6>Telefono</h6>
                        <li className="list-group-item">{usuario.telefono}</li>
                        <h6>Direccion</h6>
                        <li className="list-group-item">{usuario.direccion}</li>
                    </ul>
                    <br/>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>                
            </div>
            
        </div>
    )
}

export default UsuarioIndividual