import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Web site</td>
            <td className="deposit">R$12,000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2025</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1000</td>
            <td>Casa</td>
            <td>30/02/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
