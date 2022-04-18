async function getAll(){
    console.log("Fetching all categories");
    const response = await fetch("/api/categories");    
    const categories = await response.json();
    for(let i in categories){

        const response2 = await fetch(`/api/categories/${categories[i].id}`);

        const result = await response2.json();
        
        categories[i].items = result;
    }
    return categories;
}

export default {getAll};