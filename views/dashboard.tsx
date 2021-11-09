import useAPI from "../hooks/useAPI";

const Dashboard = () => {
  const { data, error } = useAPI("/api/hello");

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Data</p>

      <pre>
        <code>{JSON.stringify({ data })}</code>
      </pre>

      <p>Error</p>

      <pre>
        <code>{JSON.stringify(error)}</code>
      </pre>
    </div>
  );
};

export default Dashboard;
