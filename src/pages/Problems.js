import {useEffect, useState} from 'react';
import axios from '../utils/KCaxios';

function Table({rows}) {
  return (
    <table>
      <thead>
        <tr>
          <th>임시</th>
        </tr>
      </thead>
      <tbody>
      {rows.map(r => <Rows key={r.id} {...r}/>)}
      </tbody>
    </table>
  )
}

function Rows({id}) {
  return (
    <tr>
      <td>{id}</td>
    </tr>
  );
}

function Problems() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get('/api/v1/problems');
    setProblems(res.data);
  };

  return (
    <div className="Problems d-flex flex-column">
      <h1>문제</h1>
      <Table rows={problems}/>
    </div>
  );
}
export default Problems;