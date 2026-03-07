import { AutoComplete } from "./components/AutoComplete"

const sampleData = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon',
    'mango',
    'nectarine',
]

export const Typeahead = () => {

    const fetchSuggestions = async (query, signal) => {
        try {
            const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`, { signal })

            if (!res.ok) {
                throw new Error('Something went wrong')
            }

            const data = await res.json()
            return data.recipes
        } catch (e) {
            console.log('Error while fetching suggestions', e)
        }
    }

    return (
        <div>
            <h1>Typeahead/Autosuggestion</h1>
            <AutoComplete
                placeHolder='Search for '
                fetchSuggestions={fetchSuggestions}
                dataKey="name"
                customLoading={<div>Loading...</div>}
                onSelect={(value) => console.log('value', value)}
                onChange={(value) => console.log('value', value)}
                onBlur={(e) => { }}
                onFocus={(e) => { }}
                customSyles={{}}
            />
        </div>
    )
}