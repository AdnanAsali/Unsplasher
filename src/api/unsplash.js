import axios from 'axios';


    // Create custom GET requests
    export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: 
        {
            Authorization: 
                'Client-ID bb97f8fe790a7909ee84d286b53aeea16b29a475458819e26f8e1e096bd63bd1'
        }
    });

