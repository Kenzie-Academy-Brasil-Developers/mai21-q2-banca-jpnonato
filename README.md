# Controle de Gastos

### SOBRE A APLICAÇÃO

Nessa aplicação você deve criar uma lista de gerenciamento de gastos e o cálculo informando o saldo total. Você deverá utilizar a lógica e os conhecimentos aprendidos no Q2 para:

- Criar uma **entrada** de usuário onde o gasto será nomeado.
- Criar uma **entrada** de usuário com o valor numérico onde o gasto será definido
- A iteração da lista de controle de gastos, **renderizando** o valor total.


### REGRAS DE NEGÓCIO

- Utilize o seguinte array como valor inicial para seu state: 
```
[
    { title: "Salário", type: "Entrada", value: 2500 },
    { title: "Aluguel", type: "Saída", value: -800 },
]
```
- Sua aplicação deve conter 3 componentes sendo eles: Transactions, RegisterNewTransaction, TotalBalance
- A sua aplicação deve receber dois valores de entrada: Title e Value. Ela deve cadastrar apenas valores do tipo saída, porém o valor inserido **deve** ser um número positivo. (RegisterNewTransaction)

- A sua aplicação deve renderizar os nomes, tipos e valores de cada item. (Transactions)
- A sua aplicação deve renderizar o balanço total das transações. (TotalBalance)



### CRITÉRIOS DE AVALIAÇÃO

1 - State
2 - Componentes
3 - Props
4 - Lógica
5 - Callback
