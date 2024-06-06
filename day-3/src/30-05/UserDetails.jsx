import { useParams } from "react-router-dom";

function UserDetails() {
  const { ABcd134 } = useParams();
//   useEffect(() => {
//     // use username and call api to fetch product details
//     if(username){
//         // call api
//     }
//   }, [username]);
  return (
    <div>
      <h1>UserDetails - {ABcd134}</h1>
    </div>
  );
}

export default UserDetails;