// Buscar os links salvos.

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;

}

// salvar link no localstorage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // se ja tiver um link salvo com id eu não vou deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id )

    if(hasLink){
        console.log('Esse linka ja existe na sua lista!')
        return;
    }

    // adicionar esse novo link na lista...
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')

}

// deletar link salvo

export function deleteLink( Links, id ){

    let myLinks = Links.filter( item => {
        return ( item.id !== id )
    } )

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks;

}