import { ref } from "vue";
import { defineStore } from "pinia";
import { auth } from "../includes/firebase.js";

export const useUserStore = defineStore("user", () => {
  const userLoggedIn = ref(false);

  const register = async (values) => {
    const userCred = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await userCred.user.updateProfile({
      displayName: values.name,
    });
  };

  const authenticate = async (values) => {
    await auth.signInWithEmailAndPassword(values.email, values.password);

    userLoggedIn.value = false;
  };

  const signout = async () => {
    await auth.signOut();

    userLoggedIn.value = false;
  };

  return { userLoggedIn, register, authenticate, signout };
});
