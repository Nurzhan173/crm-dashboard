import React from 'react';

export default class Service {
  state = {
    data: null
  }

  async function getRes() {

    let response = await fetch('https://djangorestcarwash.herokuapp.com/api/test/Wash/',
    {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Успех:', JSON.stringify(response)))
    .then((response) => {
      this.setState({ data: response })
    })
    .catch(error => console.error('Ошибка:', error));
  }


}
