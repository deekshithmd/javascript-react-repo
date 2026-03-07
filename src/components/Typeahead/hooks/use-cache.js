const cache = new Map();

export const useCache = () => {

    const getCachedResults = (query) => {
        if (cache.has(query)) {
            return cache.get(query);
        }
        return [];
    }

    const setCachedResults = (query, results) => {
        if (cache.has(query)) {
            cache.delete(query);
        }
        cache.set(query, results)
    }

    return { getCachedResults, setCachedResults }
}