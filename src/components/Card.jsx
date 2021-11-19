import cidades from '../data/database'

const Card = () => {
  return(
    <>
      {cidades.map(cidade => 
        <div className="body" key={cidade.id}>
          <h2 className="nome">{cidade.cidade}</h2>
          <p className="nomePais">{cidade.pais}</p>
          <img className="imagemCidade" src={cidade.imagem} alt={cidade.nome}/>
          
          
      </div>
      )}
      </>
  )
}

    export default Card

    
