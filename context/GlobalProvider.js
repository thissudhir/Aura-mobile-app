import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwriteConfig";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setUser(res);

          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLoading, setUser, user, setIsLoggedIn, isLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
