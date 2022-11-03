import { useRef } from "react";
import "../../Styles/main.css";
import "./Navbar.css"
import { 
	Notification, 
	SearchIcon, 
	AppsIcon, 
	BurgerMenu, 
	Close } from '../SVG'

export const NavBar = () => {
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
                <SearchIcon/>
				
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
					<Close className="closeMenu"/>
				</button>
			</nav>
			<div> 
				<Notification className="notification"/>
			</div>
			<div>
				<AppsIcon className="appsIcon"/>
			</div>
			
			<button className="nav-btn" onClick={showNavbar}>
				<BurgerMenu className="burgerMenu"/>
			</button>
			
		</header>
		
	);
}