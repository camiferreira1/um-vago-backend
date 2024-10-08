// src/services/api.js
const BASE_URL = 'http://localhost:3000';  // URL base de tu backend

// Función genérica para hacer solicitudes GET
export const get = async (endpoint) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error(`Error in GET ${endpoint}: ${response.statusText}`);
    }
    return response.json();
};

// Función genérica para hacer solicitudes POST
export const post = async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error in POST ${endpoint}: ${response.statusText}`);
    }
    return response.json();
};

