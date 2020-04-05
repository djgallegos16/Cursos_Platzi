import React from 'react';

import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar'

function useSearchBadges(badges){
	const [query, setQuery] = React.useState('')
	// const filteredBadges = badges.filter(badge =>{
	// 	return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
	// })
	const [filteredBadges, setFilteredBadges] = React.useState(badges);

	React.useMemo(() =>{
		const result =  badges.filter(badge =>{ 
			return `${badge.firstName} ${badge.lastName}`
			.toLowerCase().includes(query.toLowerCase()
			);
		});
		setFilteredBadges(result)
	}, [badges, query])
	return {query, setQuery, filteredBadges}
}

function BadgesList (props){
	const badges = props.badges;
	const {query, setQuery, filteredBadges} = useSearchBadges(badges);

	if(filteredBadges.length === 0){
		return (
			<div>
				<div className="form-group">
				<label>Filter Badges</label>
				<input className="form-control" type="text"
					value = {query}
					onChange = {(e)=>{
						setQuery(e.target.value)
						console.log(e.target.value);
					}}
				/>
			</div>
				<h3>No Badges were found</h3>
				<Link className="btn btn-primary" to="/badges/new"> Create a new Badge</Link>
			</div>
		)
	}
	return(
		<div className="BadgesList">
			<div className="form-group">
				<label>Filter Badges</label>
				<input className="form-control" type="text"
					value = {query}
					onChange = {(e)=>{
						setQuery(e.target.value)
						console.log(e.target.value);
					}}
				/>
			</div>
			<ul className="list-unstyled">
				{/* {this.props.badges.map((badge) =>{ */}
				{filteredBadges.map(function(badge,i){
					return (
						<li key={i}>
							<Link className="text-reset text-decoration-none Badge__row" to={`/badges/${badge.id}`}>
								<Gravatar 
									className = "Badge__logo"
									email = {badge.email}
									alt="Avatar"
								/>
								{/* <img className='Badge__logo' src={badge.avatarUrl} alt="avatar"/> */}
								<div className='Badge__container'>
									<p className='Badge__name'> {badge.firstName} {badge.lastName} </p>
									<p className='Badge__email'> @{badge.twitter} / {badge.email} </p>
									<p className='Badge__job'> {badge.jobTitle} </p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
		
	);
}

export default BadgesList;