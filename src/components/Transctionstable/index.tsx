import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable(){

  useEffect(()=>{
    api.get('transactions')
    .then(response=> console.log(response.data))
  },[])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blasldkjasldk</td>
            <td className="deposity">R$12,00</td>
            <td>developer</td>
            <td>dateee</td>
          </tr>
          <tr>
            <td>Blasldkjasldk</td>
            <td className="withdrawal">-R$120,00</td>
            <td>developer</td>
            <td>dateee</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}