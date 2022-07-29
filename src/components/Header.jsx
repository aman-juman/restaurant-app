import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useContextValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useContextValue();
  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);

    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    // signInWithPopup(auth, provider);
    // .then((result) => {
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const user = result.user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.customData.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // });
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img className="w-10 object-cover" src={Logo} alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
              Services
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor hover:text-headingColor duration-200 ease-in-out text-2xl cursor-pointer ml-8" />
            <div className="w-5 h-5 bg-cartNumBg rounded-full flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div>
            <motion.img
              whileTap={{ scale: 0.8 }}
              className="w-10 h-10 min-w-[40px] min-h-[40px] shadow-2xl cursor-pointer"
              src={Avatar}
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full"></div>
    </header>
  );
};

export default Header;
