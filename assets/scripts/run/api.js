'use strict'
const store = require('../store.js')
const config = require('../config.js')

const createRun = (runData) => {
  console.log(store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/runs',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify({
      'run': {
        'distance': runData.run.distance,
        'time': runData.run.time,
        'date': runData.run.date,
        'user_id': store.user.id
      }
    })
  })
}

module.exports = {
  createRun
}
