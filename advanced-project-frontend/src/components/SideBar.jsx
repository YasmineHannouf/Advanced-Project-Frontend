import adminImage from '../assets/default_61f3429ad1ced-removebg-preview.png';
import { useState, useContext } from 'react';
import React from 'react';
import '../styles/sideBar.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import SideLink from './SideLink';
import DropdownLink from './DropdownLink';

import brand from '../assets/logo.png';
import { context, Context } from '../App.js';

library.add(fas);

const SideBar = (props) => {

  const navigate = useNavigate();
  const [status, setStatus] = useState(props.status);
  const handleLogOut = () => {
    axios
      .get("http://127.0.0.1:8000/api/logout")
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .then((err) => {
        console.log(err);
      });
  };
  const sideBarLinks = [
    {
      name: "home",
      path: "/home",
      icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" />,
    },
    {
      name: "Incomes",
      path: "/incomes",
      icon: <FontAwesomeIcon icon="fa-solid fa-download" />,
    },

    {
      name: "Additionals",
      icon: <FontAwesomeIcon icon="fa-solid fa-grip" />,
      subLinks: [
        {
          name: "Category",
          path: "/category",
        },
        {
          name: "Fixed Key",
          path: "/fixedkey",
        },
      ],
    },

    status && {
      name: "ManageAdmin",
      path: "/manageadmin",
      icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
    },

    {
      name: "Goals Tracker",
      path: "/goals",
      icon: <FontAwesomeIcon icon="fa-solid fa-bullseye" />,
    },
  ];
	const [sideBarExpanded, setsideBarExpanded] = useContext(context);
	return (
		<aside className={sideBarExpanded ? 'sideBar' : 'sideBar_expanded'}>
			<div className="brandContainer">
				<h1 className="z-index">
					<img src={brand} alt="brand" />
				</h1>

				{sideBarExpanded ? (
					<FontAwesomeIcon
						className="z-index"
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-left"
					/>
				) : (
					<FontAwesomeIcon
						className="z-index"
						onClick={() => {
							setsideBarExpanded(!sideBarExpanded);
						}}
						icon="fa-solid fa-arrow-right"
					/>
				)}
			</div>
			<div className="sideLinksContainer z-index">
				{sideBarLinks.map((eachLink) => {
					if (eachLink.name === 'Additionals') {
						return (
							<div key={sideBarLinks.indexOf(eachLink)}>
								<DropdownLink
									display={sideBarExpanded ? true : false}
								/>
							</div>
						);
					}
					return (
						<SideLink
							key={sideBarLinks.indexOf(eachLink)}
							name={eachLink.name}
							path={eachLink.path}
							icon={eachLink.icon}
						/>
					);
				})}
			</div>
			<div className="userCredentials z-index">
				<div className="profileContainer">
					<img src={adminImage} alt="admin" />
				</div>
				<div>
					<h4>{props.name}  </h4>
					<p>Administrator</p>
				</div>
				<FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
			</div>
		</aside>
	);
};

export default SideBar;
