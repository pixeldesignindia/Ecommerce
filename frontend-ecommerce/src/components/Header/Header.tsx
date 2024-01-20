import React from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";
import { User } from "../../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";
interface propestype {
  user: User | null;
}
const Header = ({ user }: propestype) => {
  const logOutHandler = async () => {
    try {
      signOut(auth);
      toast.success("Log Out Successful");
    } catch (err) {
      toast.error("Log Out Failed");
    }
  };
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/product"}>Product</Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? <FaUser /> : <Link to={"/logIn"}>SignIn</Link>}
    </nav>
  );
};

export default Header;
