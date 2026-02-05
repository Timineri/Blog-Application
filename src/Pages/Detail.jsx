import { useParams, useNavigate } from "react-router";

function Details() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const { body} = useParams();
  return (
    <div>
      <h2>{body}</h2>

      <button class="btn btn-primary" onClick={goHome}>Back to Home</button>
    </div>
  );
}

export default Details;