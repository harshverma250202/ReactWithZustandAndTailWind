const backendUrl = process.env.REACT_APP_DEV_SERVER_URL || 'http://localhost:4000';
const baseApi = {
    get: (endpoint, options = {}) => {
        return fetch(`${backendUrl}${endpoint}`, {
            ...options,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {})
            }
        });
    },
    post: (endpoint, data, options = {}) => {
        return fetch(`${backendUrl}${endpoint}`, {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {})
            },
            body: JSON.stringify(data)
        });
    },
    put: (endpoint, data, options = {}) => {
        return fetch(`${backendUrl}${endpoint}`, {
            ...options,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {})
            },
            body: JSON.stringify(data)
        });
    },
    delete: (endpoint, options = {}) => {
        return fetch(`${backendUrl}${endpoint}`, {
            ...options,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {})
            }
        });
    }
};

export default baseApi;
