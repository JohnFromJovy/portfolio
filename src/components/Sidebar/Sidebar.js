import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	FaHome,
	FaRegLaugh,
	FaRegImage,
	FaComment,
	FaBars,
	FaGithub,
	FaInstagram,
	FaLinkedin,
} from 'react-icons/fa';

import './sidebar.css';

const Sidebar = ({ children }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	const menuItem = [
		{ path: '/', name: 'Homepage', icon: <FaHome /> },
		{ path: '/about', name: 'About', icon: <FaRegLaugh /> },
		{ path: '/gallery', name: 'Gallery', icon: <FaRegImage /> },
		{ path: '/contact', name: 'Contact', icon: <FaComment /> },
	];

	const socialMediaItem = [
		{
			url: 'https://github.com/JohnFromJovy',
			name: 'Github',
			icon: <FaGithub />,
		},
		{
			url: 'https://www.instagram.com/jovy_studio/',
			name: 'Instagram',
			icon: <FaInstagram />,
		},
		{
			url: 'https://www.linkedin.com/in/li-jiang-80aa3660/',
			name: 'LinkIn',
			icon: <FaLinkedin />,
		},
	];

	return (
		<div className="sidebarContainer">
			<div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
				<div className="topSection">
					<h1
						style={{ display: isCollapsed ? 'none' : 'block' }}
						className="logo">
						JOVY
					</h1>
					<div
						style={{ marginLeft: isCollapsed ? '0' : '80px' }}
						className="bars">
						<FaBars onClick={toggle} />
					</div>
				</div>
				{menuItem.map((item, index) => (
					<NavLink
						to={item.path}
						key={index}
						className="link"
						activeclassName="active">
						<div className="icon">{item.icon}</div>
						<div
							style={{ display: isCollapsed ? 'none' : 'block' }}
							className="linkText">
							{item.name}
						</div>
					</NavLink>
				))}
				<div className="linkSection">
					{socialMediaItem.map((item) => (
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							alt={item.name}
							className="linkIcon">
							{item.icon}
						</a>
					))}
				</div>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Sidebar;
