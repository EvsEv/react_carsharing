export const fetchData = async (name, parameter = "", value = "") => {
    const headers = {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json",
    };
    try {
        const response = await fetch(
            `https://api-factory.simbirsoft1.com/api/db/${name}?${parameter}=${value}`,
            {
                headers,
            }
        );
        const json = await response.json();

        return json.data;
    } catch (e) {
        console.log(e);
    }
};
