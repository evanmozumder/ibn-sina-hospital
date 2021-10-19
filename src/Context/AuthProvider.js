import { createContext } from "react";
import useConactDetails from "../hooks/useContactDetails";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const { services } = useServices();
  const { contacts } = useConactDetails();
  console.log("Services from AuthProvider", services);
  const data = {
    allContext,
    services,
    contacts,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
