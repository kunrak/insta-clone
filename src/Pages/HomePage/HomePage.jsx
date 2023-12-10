import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="/auth">Auth</Link>
    </>
  );
}

export default HomePage;
