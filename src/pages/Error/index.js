import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(

        <div className='container-error'>

            <img src="notfound.png" alt="Pagina não encontrada" />
            <h1> Pagina não encontrada! </h1>
            <Link to="/"> Pagina inicial </Link>

        </div>

    )
}