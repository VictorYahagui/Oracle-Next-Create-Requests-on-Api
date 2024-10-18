export const fetchData = async (url, options = {}) => {
    try {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const mergedOptions = { ...defaultOptions, ...options };
        const response = await fetch(url, mergedOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};