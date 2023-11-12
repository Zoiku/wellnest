import { useAtom } from "jotai";
import useNavigation from "./useNavigation";
import { atomWithStorage } from "jotai/utils";

const authAtom = atomWithStorage("auth", localStorage.getItem("auth"));

const useAuth = () => {
  const { goToWithoutHistory } = useNavigation();
  const [auth, setAuth] = useAtom(authAtom);
  const signIn = (authData) => {
    setAuth(authData);
    goToWithoutHistory("/patient/dashboard", { replace: true });
  };
  const signOut = () => {
    setAuth(null);
  };
  const modifyAuth = (prop, value) => {
    setAuth({ ...auth, [prop]: value });
  };

  return { auth, modifyAuth, signIn, signOut };
};

export default useAuth;
