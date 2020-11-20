import firebase from "gatsby-plugin-firebase";
import { navigate } from "gatsby";

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = (user) => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = async ({ email, password }) => {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    setUser({
      username: result.user,
    });
    // await navigate(`/app/inventario`);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
