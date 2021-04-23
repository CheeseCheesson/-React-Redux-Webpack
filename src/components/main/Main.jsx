import React, { useEffect, useState } from 'react'
import './main.less'
import { useDispatch, useSelector } from "react-redux"
import { getRepos } from "../actions/repos"
import { setCurrentPage } from "../../reducers/reposReducer"
import Repo from "./repo/Repo"
import { createPages } from '../../utils/pagesCounter'
import { Redirect } from "react-router-dom"

const Main = (props) => {
	const dispatch = useDispatch()
	const repos = useSelector(state => state.repos.items)
	const isFetching = useSelector(state => state.repos.isFetching)
	const currentPage = useSelector(state => state.repos.currentPage)
	const totalCount = useSelector(state => state.repos.totalCount)
	const perPage = useSelector(state => state.repos.perPage)
	const isFetchError = useSelector(state => state.repos.isFetchError)
	const [searchValue, setSearchValue] = useState("")
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pagesCount, currentPage)

	useEffect(() => {
		dispatch(getRepos(searchValue, currentPage, perPage))
	}, [currentPage])

	function searchHandler() {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue, currentPage, perPage))
	}



	return (
		<div>

			<div className="main-container">

			
			{ isFetchError &&
				<div className="alert alert-danger" role="alert">
					Произошла ошибка! ПОжалуйста обновите страницу!
				</div>
			}
			<div className="search">
				<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
				<button onClick={() => searchHandler()} className="search-btn">Search</button>
			</div>
				<div className="main-repo">
					{
						isFetching === false
							?
							repos.map((repo, index) => <Repo repo={repo} key={index} />)
							:
							<div className="fetching">

							</div>
					}
			</div>
			

			<div className="pages">
				{pages.map((page, index) => <span
					key={index}
					className={currentPage == page ? "current-page" : "page"}
					onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
			</div>
			</div>
		</div>
	)
}

export default Main