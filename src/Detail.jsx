// import React from "react";
// export default function Details(){
//     return <div>Details Page</div>
// }

import { useParams, useNavigate } from "react-router";

function Details() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const { id } = useParams();
  return (
    <div>
      <h2>Welcome, {id}!</h2>
      <p>This is your profile page.</p>

      <button onClick={goHome}>Go to Home</button>
    </div>
  );
}

export default Details;