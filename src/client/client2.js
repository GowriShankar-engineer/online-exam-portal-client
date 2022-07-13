const axios = require('axios');

export default async function clientCall() {
    const config = {
        method: 'post',
        url: 'https://sathish-online-exam-portal.herokuapp.com/api/exam/reports',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let response = await axios(config);
    console.log(response, 'response')

    console.log('response1', response)
    return response.data;
}




