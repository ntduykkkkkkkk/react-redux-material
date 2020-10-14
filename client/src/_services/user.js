import axios from 'axios';

const baseUrl = 'http://localhost:9000/api/v1/user'

export default {
    user(url = baseUrl) {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord)
        }
    }
}