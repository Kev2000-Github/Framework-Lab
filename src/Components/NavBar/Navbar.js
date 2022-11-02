import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/main.css";
import "./Navbar.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<meta charset="utf-8"/> 
        <link rel="stylesheet" href="Navbar.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <title>Awesome Search Box</title>
		
		<div className="search-box">
            <input className="search-txt" type="text" name="" placeholder="Search for data, users, doc"/>
			
            <a className="search-btn" href="#">
                <i className="fas fa-search"></i>
				
            </a>
        </div>
			<nav ref={navRef}>
				<a href="/#">Team</a>
				<a href="/#">teareaiders</a>
				<a href="/#"></a>
				<a href="/#"></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div> <i className="fa-sharp fa-solid fa-bell"></i></div>
			<div> <i className="fa-solid fa-border-all"></i></div>
			
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
		
	);
}

export default Navbar;
