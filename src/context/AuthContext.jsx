import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Fetching info from the user if the user is empty
  useEffect(() => {
    if (!currentUser) {
      axios.get("/users/profile").then(({ data }) => {
        setCurrentUser(data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
