import './error.css'
import { Link } from 'react-router-dom'

import Erro from '../../components/img/notFound.png'

export default function Error(){
    return(

        <div className='container-error'>

            <img src={Erro} alt="Pagina não encontrada" />
            <h1> Pagina não encontrada! </h1>
            <Link to="/mylink"> Pagina inicial </Link>

        </div>

    )
}