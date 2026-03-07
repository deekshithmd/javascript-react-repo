import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Suggestions } from "../Suggestions";
import { useCache } from "../../hooks/use-cache";

export const AutoComplete = ({
    placeHolder,
    staticData,
    fetchSuggestions,
    dataKey,
    customLoading,
    onSelect,
    onChange,
    onBlur,
    onFocus,
    customSyles,
}) => {
    const [inputText, setInputText] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [suggestions, setSuggestions] = useState([])

    const { getCachedResults, setCachedResults } = useCache();

    const handleInputChange = (e) => {
        setInputText(e.target.value)
        onChange(e.target.value)
    }


    const debounced = (callback, delay) => {
        let timerId = null;
        const debounce = function (...args) {
            const context = this;
            if (timerId) {
                clearTimeout(timerId)
            }
            timerId = setTimeout(() => {
                callback.apply(context, args)
                timerId = null;
            }, delay)
        }

        debounce.cancel = () => {
            if (timerId) {
                clearTimeout(timerId)
                timerId = null;
            }
        }

        return debounce
    }

    const getSuggestions = useCallback(async (query) => {
        setLoading(true)
        setError(null)
        try {
            let results = [];

            const cachedResults = getCachedResults(query)
            if (cachedResults?.length > 0) {
                setSuggestions(cachedResults)
                return;
            }
            if (staticData) {
                results = staticData.filter(data => data.toLowerCase().includes(query.toLowerCase()))
            }
            else if (fetchSuggestions) {
                results = await fetchSuggestions(query)
            }
            if (results) {
                setSuggestions(results)
                setCachedResults(query, results)
            }
        }
        catch (e) {
            setError(e)
            console.log('Error while getting suggestions', e)
        } finally {
            setLoading(false)
        }
    }, [])

    const debouncedGetSuggestions = useMemo(() => debounced(getSuggestions, 500), [getSuggestions])



    useEffect(() => {
        if (inputText.length > 1) {
            debouncedGetSuggestions(inputText)
        } else {
            debouncedGetSuggestions.cancel()
            setSuggestions([])
        }
    }, [inputText])

    const handleSuggestionClick = (suggestion) => {
        setInputText(dataKey ? suggestion[dataKey] : suggestion)
        onSelect(suggestion)
        setSuggestions([])
    }


    return <div>
        <input placeholder={placeHolder} value={inputText} onBlur={onBlur} onFocus={onFocus} ontype="text" onChange={handleInputChange} />
        {(suggestions.length > 0 || loading || error) &&
            <ul>
                {loading && <div>{customLoading}</div>}
                {error && <div>{error}</div>}
                <Suggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} dataKey={dataKey} query={inputText} />
            </ul>
        }

    </div>
};
