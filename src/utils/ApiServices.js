
const BASE_URL ="http://192.168.0.201/dev/RestAPI_V1_alok/project/v2";
const API_PATH = new URL(BASE_URL).pathname.replace(/\/$/, "");


export const apiServices = async (endpoint, payload) => {
    try {
        const response = await fetch(`${API_PATH}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
};
