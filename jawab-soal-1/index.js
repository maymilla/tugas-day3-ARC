const axios = require('axios').default;

const url = "https://reqres.in/api/users";

axios.get(url+'/2')
.then((data)=>console.log(data.data))
.catch((error)=>console.log('error: '+error))

axios.post(url,{
    name : "Lala",
    age : 16,
})
.then((data)=>console.log(data))