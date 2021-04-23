
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { getCurrentRepo, getCotributors } from '../actions/repos'
import './card.less'


const Card = (props) => {
	const { username, reponame } = useParams()
	const [repo, setRepo] = useState({owner: {}})
	const [contributors, setContributors] = useState([])
	useEffect(() => {
		getCurrentRepo(username, reponame, setRepo)
		getCotributors(username, reponame, setContributors)
	}, [])
	return (
		<div className="main-container">
	
			<div className="card-component">
				<div className="card-img">
					<img src={ repo.owner.avatar_url} alt="" />
				</div>
				<div className="card-body">
					<div className="card-name">{repo.name}</div>
				<div className="stars">Колличество звёзд: {repo.stargazers_count}</div>
					<div className="contributors">
						Подписчики:
							{
							contributors.map((c, index) =>
								<div key={index}>
									{index + 1}. {c.login}
								</div>
							)
						}
				</div>
				
					<button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
				</div>
			</div>
		</div>
	)
}

export default Card