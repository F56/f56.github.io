import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Middleware(firstName, lastName) {
  const { currentUser, addUserData } = useAuth();
  

  return addUserData(currentUser.uid, firstName, lastName)
    .then(() => {
      console.log("Correcto.");
      
    })
    .cacth((error) => {
      console.log("Error: " + error);
      
    });
}

export default Middleware;
