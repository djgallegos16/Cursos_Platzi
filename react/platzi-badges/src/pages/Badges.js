import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
// import Navbar from '../components/Navbar'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import MiniLoader from '../components/MiniLoader'


class Badges extends React.Component{
	state={
		loading:true,
		error:null,
		data:undefined
	};

	componentDidMount(){
		this.fetchData();

		this.intervalId = setInterval(this.fetchData, 5000);
	}

	componentWillUnmount(){
		clearInterval(this.intervalId)
	}

	fetchData = async () => {
		this.setState({ loading:true, error:null });
		try{
			const data = await api.badges.list();
			this.setState({ loading:false, data:data });
		}catch(error){
			this.setState({ loading:false, error:error });
		}
	}

	render(){
		// console.log('2/4. render()');
		
		if(this.state.loading === true && !this.state.data){
			return <PageLoading/>;
		}
		if(this.state.error){
			return <PageError error={this.state.error} />;
		}
		
		return(
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
								<img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
						</div>
					</div>
				</div>
				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">New Badge</Link>
					</div>

					<div className="Badge__list">
						<div className="Badge__container">
								<BadgesList badges={this.state.data} />
						</div>
					</div>
					{this.state.loading && <MiniLoader/>}
				</div>
			</React.Fragment>
		);
	}

	// constructor(props){
	// 	super(props);
	// 	console.log('1. constructor()');
	// 	this.state={
	// 		loading:true,
	// 		error:null,
	// 		data:undefined
	// 	}
	// }

	// componentDidMount(){
	// 	console.log('3. componentDidMount()');

	// 	this.timeoutId = setTimeout(()=>{
	// 		this.setState({
	// 			data:[
	// 				{
	// 					firstName:'Daniela',
	// 					lastName:'Gallegos',
	// 					twitter:'djgallegos',
	// 					jobTitle:'Designer',
	// 					email:'gallegosdaniela16@hotmail.com',
	// 					avatarUrl:"https://www.gravatar.com/avatar?d=identicon"
	// 				},
	// 				{
	// 					firstName:'Jose',
	// 					lastName:'Gallegos',
	// 					twitter:'jagallegos',
	// 					jobTitle:'Debeloper Backend',
	// 					email:'gallegosjose@hotmail.com',
	// 					avatarUrl:"https://www.gravatar.com/avatar?d=identicon"
	// 				},
	// 				{
	// 					firstName:'Michael',
	// 					lastName:'Morales',
	// 					twitter:'mmorales',
	// 					jobTitle:'Developer',
	// 					email:'moralesmichael@hotmail.com',
	// 					avatarUrl:"https://www.gravatar.com/avatar?d=identicon"
	// 				}
	// 			]
	// 		})
	// 	},3000)
	// }

	// componentDidUpdate(prevProps, prevState){
	// 	console.log('5. componentDidUpdte()');
	// 	console.log({
	// 		prevProps: prevProps, 
	// 		prevState: prevState
	// 	});
	// 	console.log({
	// 		props: this.props,
	// 		state: this.state
	// 	});
	// }

	// componentWillUnmount(){
	// 	console.log('6. componentWillUnmount()');
	// 	clearTimeout(this.timeoutId);
	// }

}

export default Badges;