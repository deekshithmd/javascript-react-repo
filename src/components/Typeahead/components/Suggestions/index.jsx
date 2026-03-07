export const Suggestions = ({ suggestions, query, onSuggestionClick, dataKey }) => {

    const getHighlightedText = (text, query) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) => {
            if (part.toLowerCase() === query.toLowerCase()) {
                return <b>{part}</b>
            }
            return <span key={index}>{part}</span>
        })
    }

    return (
        <>
            {
                suggestions?.map(suggestion => {
                    const currSuggestion = dataKey ? suggestion[dataKey] : suggestion
                    return <li tabIndex={0} key={currSuggestion} onClick={() => onSuggestionClick(suggestion)} onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onSuggestionClick(suggestion)
                        }
                    }}>{getHighlightedText(currSuggestion, query)}</li>
                })
            }
        </>
    )
}