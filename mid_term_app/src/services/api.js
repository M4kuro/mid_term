const API = "";

export async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Fail to fetch data: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}