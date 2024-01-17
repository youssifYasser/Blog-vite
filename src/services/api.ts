import axios from 'axios'

// Create a new instance of axios with the desired configuration
const api = axios.create({
  // Set the base URL for all API requests
  baseURL: 'https://jsonplaceholder.typicode.com',
})

// Export the created axios instance as the default export
export default api
