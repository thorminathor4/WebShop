async function getAll(){
    console.log("Fetching all products");
    const response = await fetch("/api/products");
    return await response.json();
}

export default {getAll};