import React from 'react'
import {calculateInvestmentResults, formatter} from "../util/investment"
const Results = ({inputData}) => {
const res = calculateInvestmentResults({
    initialInvestment: inputData.principal,
    annualInvestment: inputData.investment,
    expectedReturn: inputData.areturn,
    duration: inputData.years,
  })
   
  return (
    <section>
        <table id='result'>
        <thead>
            <tr>
           <th>Year</th>
           
           <th>Invesement Value</th>
           <th>Interset (Year)</th>
           <th>Total Interset</th>
           <th>Interset Captial</th>
           </tr>
           </thead>
           <tbody>
           {res.map((item) => {
                return (
                     <tr key={item.year}>
                     <td>{formatter.format(item.year)}</td>
                     <td>{formatter.format(item.valueEndOfYear)}</td>
                     <td>{formatter.format(item.interest)}</td>
                     <td>{formatter.format(item.interest)}</td>
                     <td>{formatter.format(item.annualInvestment)}</td>
                     </tr>
                )
           })}
            </tbody>
        </table>
    </section>
  )
}

export default Results