const BASE_URL = "https://api-react-taller-production.up.railway.app";

const register = async (name, username, password) => {

    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({name, username, password})
    });

    const data = await response.json();

    console.log("Informacion de registro" , data);

    return data;

}

const login = async (username, password) => {
    
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({username, password})
    });

    const data = await response.json();

    console.log("Informacion de login" , data);

    return data;
}

export{
    register,
    login
}

// GET - No necesita cuerpo (method, headers, body)

//POST
//DELETE
//PUT