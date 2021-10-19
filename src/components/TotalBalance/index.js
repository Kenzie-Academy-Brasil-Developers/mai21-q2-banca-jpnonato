 
 
 const TotalBalance = ({list}) => {

    return (
        <section>
            <h1>
                Valor total: R$
                {
                    list.reduce((s,a) => a.value + s, 0)
                }
            </h1> 
        </section>
    )
 }

 export default TotalBalance