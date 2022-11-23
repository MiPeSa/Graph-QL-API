import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client"

function App() {

  const GET_COUNTRIES = gql`
  query GetCountries {
    countries{
      code
      name
      continent{name}
    }
  }
`;

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error...</p>
    else {
      return (
        <div className="App">
          <header className="App-header">
          <h1>Graph QL API</h1>
          </header>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Country</th>
                <th>Continent</th>
              </tr>
            </thead>
            <tbody>
              {data.countries.map((country, index) => 
                <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.continent.name}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }

}

export default App;
