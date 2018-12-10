'use strict'
const store = require('../store.js')
const config = require('../config.js')

const createRun = (runData) => {
  // console.log(store.user.token)
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

const updateRun = (id, distance, time, date) => {
  // console.log(id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/runs/${id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify({
      'run': {
        'distance': distance,
        'time': time,
        'date': date,
        'user_id': store.user.id
      }
    })
  })
}
const getRun = function () {
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRun = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/runs/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  createRun,
  getRun,
  updateRun,
  deleteRun
}
