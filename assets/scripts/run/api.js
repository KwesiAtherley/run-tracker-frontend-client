'use strict'
const store = require('../store.js')
const config = require('../config.js')

const createRun = (runData) => {
  runData.run['user_id'] = store.user.id
  console.log(runData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/runs',
    header: {
      Authorization: `Token token=${store.user.token}`,
      contentType: 'application/json'
    },
    data: JSON.stringify(runData)
  })
}

module.exports = {
  createRun
}
