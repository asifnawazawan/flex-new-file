import React from "react";
const Navbar = () => {
    return(
        <div>
<nav className="w-full flex bg-black">
    <ul className="flex items-center p-5 text-white justify-center gap-10">
        <div className="flex justify-start">
        <img src="https://www.exclusivesteering.com/wp-content/uploads/2019/09/ex-logo.jpg" alt="" height={80} width={80}/>
        </div>
        <div className="flex justify-evenly gap-10">
        <li><a href="">Home</a></li>
        <li><a href="">Contect</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">About</a></li>
        </div>
    </ul>
</nav>
        </div>
    )
}
export default Navbar