import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

	constructor(props) {
		super(props);

		let db = window.db;
		this.state = {
			db: db,
			query: '',
			results: db,
			loading: false,
			message: '',
			totalResults: db.length,
			totalPages: 1,
			currentPageNo: 1,
		};

		this.cancel = '';
	}


	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = (total, denominator) => {
		const divisible = 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor(total / denominator) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = (updatedPageNo = '', query) => {

		if (this.cancel) {
			this.cancel.cancel();
		}

		const res = this.state.db.filter(e => e.title.toLowerCase().includes(query.toLowerCase()) || e.tags.filter(t => t.toLowerCase().includes(query.toLowerCase())).length);

		const total = res.length;
		const totalPagesCount = this.getPageCount(total, 20);
		const resultNotFoundMsg = !res.length ? 'There are no more search results. Please try a new search' : '';
		this.setState({
			results: res,
			message: resultNotFoundMsg,
			totalResults: total,
			totalPages: totalPagesCount,
			currentPageNo: updatedPageNo,
			loading: false
		});
	};

	handleOnInputChange = (event) => {
		const query = event.target.value;
		this.setState({ query, loading: true, message: '' }, () => {
			this.fetchSearchResults(1, query);
		});
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	handlePageClick = (type, event) => {
		event.preventDefault();
		const updatePageNo = 'prev' === type
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if (!this.state.loading) {
			this.setState({ loading: true, message: '' }, () => {
				this.fetchSearchResults(updatePageNo, this.state.query);
			});
		}
	};

	renderSearchResults = () => {
		const { results } = this.state;
		if (results.length) {
			return (
				<div className="results">
					{results.map((result, i) => {
						return (
							<div class="result-item">
								<img className="image"
									src={`${result.img}`}
									alt="Ocimum basilicum" />
								<div class="result-info">
									<h4 class="image-username">{`${result.title}`}</h4>
									<div class="result-tag-div">
										{result.tags.map(t => <span class="result-tag">{`${t}`}</span>)}
									</div>
									<span class="result-desc">{`${result.desc}`}</span>

								</div>
							</div>
						)
					})}
				</div>
			)
		}
	};

	render() {
		const { query, message } = this.state;

		return (
			<div className="container">
				{/* Search Input*/}
				<div className="search-label" htmlFor="search-input">
					<div className="search-icon">
						<SearchIcon />
					</div>
					<input
						type="text"
						name="query"
						value={query}
						id="search-input"
						placeholder="Search..."
						onChange={this.handleOnInputChange}
					/>
				</div>

				{/*	Error Message*/}
				{message && <p className="message">{message}</p>}

				{/*	Result*/}
				{this.renderSearchResults()}

			</div>
		)
	}
}

export default Search