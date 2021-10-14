
const  Transactions = ({list}) => {

    return(
        <div>
            {
                list.map((elt) =>
                    <div>
                        <h3>Nome: {elt.title}</h3>
                        <h3>Tipo: {elt.type}</h3>
                        <h3>Valor: {elt.value}</h3>
                    </div>
                )
            }
        </div>
    )
}

export default Transactions