import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'
import { useState } from 'react';

export default function LinkItem({ closeModal, content }){

    const [mensagem, setMensagem] = useState('');

    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        setMensagem("URL Copiada com sucesso!");
    }

    return(

        <div className='modal-container'>

            <div className="modal-header">

                <h2> Link Encurtado </h2>
                <button onClick={closeModal}> <FiX size={28} color="#000"/> </button>

            </div>

            <span> {content.long_url} </span>
            <span> {mensagem} </span>

            <button className='modal-link' onClick={copyLink}>  {content.link} <FiClipboard size={20} color="#FFF"/> </button>

        </div>

    )
}