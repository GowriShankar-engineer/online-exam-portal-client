const axios = require('axios');

export default async function getUser({ userName, password }) {
    const data = JSON.stringify({
        "userName": userName,
        "password": password
      });
      
    const config = {
      method: 'post',
      url: 'https://sathish-online-exam-portal.herokuapp.com/api/getUser',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
      
    let response =  await axios(config);
    console.log(response,'response')

    console.log('response1',response)
    return response.data.code;
}




