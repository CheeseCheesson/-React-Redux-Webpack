import React from 'react'
import './lessApp.less'
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Main from "./main/Main"
import Card from './card/card'
import Error from './main/repo/Error'

const App = () => {
	const dispatch = useDispatch()


	return (
		<BrowserRouter>
			<div className="containerApp">
				<div className="header">
					<div className="header-text">
						<a href="" onClick={() => props.history.goBack()}>GitHub Repo Stars</a>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/card/:username/:reponame" component={Card} />
					<Route path="/error" component={Error} />
					<Redirect to="/" />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App