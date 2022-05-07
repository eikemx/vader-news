const NoSearchResult = ({search}) => {
    return (
        <div className="vader-no-results">
            <h1>Long we searched. Mhmm. But no "{search}" we found. </h1>
            <img className="no-search-results"
            src="https://media.giphy.com/media/3o6ZsU47dLfM09rqKY/giphy.gif" 
            alt="vader-no-search-results"
            />
        </div>
    )
}

export default NoSearchResult;