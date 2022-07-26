import axios from 'axios'


function getUser(){
    let data 
    axios.get('http://127.0.0.1:8000/profiles/login/')
    .then(res => {
      data = res.data;
      setUser(data);
    })
    .catch(err => {
      console.log(err);
    }
    )}