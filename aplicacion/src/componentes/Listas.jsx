import React from 'react'
import Variable from './Variable';
const Listas = () => {
    const EstadoInicial = [
        { id: 1, texto: 'Texto 1'},
        { id: 2, texto: 'Texto 2' },
        { id: 3, texto: 'texto 3' },
        { id: 4, texto: 'texto 4' },
        { id: 5, texto: 'texto 5' },
    ]
    const [lista, setLista] = React.useState(EstadoInicial);
    return (
        <>
        <hr/>
        <h1>Listas</h1>
        {
            lista.map((item)=><h4>key={item.id} {item.texto}</h4>)
        }
        </>
    )
}
    
    
    
            export default Listas