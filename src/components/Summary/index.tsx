import React, { useContext } from 'react'
import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'

import inComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


export function Summary() {
  const { transactions } = useTransactions()

 const summary = transactions.reduce((acc, transaction) => {
   if(transaction.type === 'deposit') {
     acc.deposits += transaction.amount
     acc.total += transaction.amount
   }else{
     acc.withdraw += transaction.amount
     acc.total -= transaction.amount
   }
   return acc;
 },{
   deposits: 0,
   withdraw: 0,
   total: 0,
 })


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={inComeImg} alt="Entrada" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.deposits)}
          </strong>
      </div>
      <div>

        <header>
          <p>Saías</p>
          <img src={outComeImg}alt="Saídas" />
        </header>

        <strong>
          -
        {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.withdraw)}
          </strong>

      </div>
      <div className="highlight-background">

        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{summary.total}</strong>
      </div>
    </Container>
  )
}
