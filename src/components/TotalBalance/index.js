 
 
 const TotalBalance = ({list}) => {

    return (
        <section>
            {
                list.reduce((s,a) => a.value + s, 0)
            }
        </section>
    )
 }

 export default TotalBalance