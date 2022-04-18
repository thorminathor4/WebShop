async function getAll(){
    const response = await fetch("/api/users");
    return await response.json();
}

async function create(user){
    // console.log(user);
    const userJson = JSON.stringify(user);
    // console.log(userJson);
    const response = await fetch("/api/users", {
        headers: {'content-type': 'application/json'},
        method: "POST",
        body: userJson
    });
    const result = await response.json();
    return result;
}

async function login(user){
    console.log(user);
    const userJson = JSON.stringify(user);
    console.log(userJson);
    const response = await fetch("/api/login", {
        headers: {'content-type': 'application/json'},
        method: "POST",
        body: userJson
    });
    const result = await response.json();
    return result;
}

async function logout(){
    const response = await fetch("/api/logout");
    const result = await response.json();
    return result;
}

export default {getAll, create, login, logout};