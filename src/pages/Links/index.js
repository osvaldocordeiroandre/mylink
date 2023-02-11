import { useState, useEffect } from 'react';
import './links.css'
import { FiArrowLeft, FiLink2, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { getLinksSave, deleteLink } from '../../services/storeLinks';
import LinkItem from '../../components/LinkItem';

export default function Links() {
  const [ myLinks, setMyLinks ] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => { async function getLinks(){
    const result = await getLinksSave('@encurtaLink');

    if(result.length === 0){

      //nossa lista esta vazia
      setEmptyList(true);


    }

    setMyLinks(result);

  } getLinks(); }, [])

  function handleOpenLink(Link){
    setData(Link);
    setShowModal(true);
  }

   async function handleDelete(id){
    const result = await deleteLink( myLinks, id );

    if(result.length === 0){
      setEmptyList(true);
    }

    setMyLinks(result)

  }

    return(
      
      <div className='links-container'> 
  
        <div className='links-header'>

            <Link to="/mylink"> <FiArrowLeft size={38} color="#FFF" />  </Link>
            <h1> Meus Links </h1>

        </div>

        { emptyList && (
          <div className='links-item'> 

            <h2 className='empty-text'> Sua lista está vazia... </h2>

          </div>
        )}

        { myLinks.map( Link => (

          <div key={Link.id} className='links-item'>

          <button onClick={ () => handleOpenLink(Link) } className='link'> <FiLink2 size={18} color="#FFF" /> {Link.long_url} </button>
          <button className='link-delete' onClick={ () => handleDelete(Link.id) }> <FiTrash size={24} color="#FF5454" /> </button>

        </div>

        ) ) }

        { showModal && ( <LinkItem closeModal={ () => setShowModal(false) } content={ data } /> ) }
      
      </div>
  
    )
  }