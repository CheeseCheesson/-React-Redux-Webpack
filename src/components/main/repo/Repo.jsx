
import React from 'react'
import './repo.less'
import { NavLink } from "react-router-dom"
import './img/star.png'

const Repo = (props) => {
	const repo = props.repo

	return (
		<div className="repo">

	
				<div className="repo-header">
			
				<div className="repo-header-name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
				<NavLink to={`/card/${repo.owner.login}/${repo.name}`}><img className="repo-img" src={repo.owner.avatar_url} alt="" />
				</NavLink>
				
			
				<div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
			</div>
			{/* <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div> */}
				<a href={repo.html_url} className="repo-link">Перейти в репозиторий</a>


			
		</div>
	)
}

export default Repo