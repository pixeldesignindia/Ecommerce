import React from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "abc123" };
const Header = () => {
return (
    <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/search"}>Search</Link>
    <Link to={"/cart"}><FaShoppingBag /></Link>
    {user?._id ? <FaUser/> : <Link to={"/logIn"}>SignIn</Link>}
    </nav>
);
};

export default Header;
