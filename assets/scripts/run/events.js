'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateRun = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  $(event.target).trigger('reset')
  api.createRun(userData)
    .then(ui.createRunSuccess)
    .catch(ui.failure)
}
const onGetRun = function (event) {
  // const userData = getFormFields(event.target)
  event.preventDefault()
  api.getRun()
    .then(ui.onGetRunSuccess)
    .catch(ui.failure)
  // console.log('onGetRun')
}

const onUpdateRun = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  $(event.target).trigger('reset')
  api.updateRun(userData.run.id, userData.run.distance, userData.run.time, userData.run.date)
    .then(ui.updateRunSuccess)
    .then(() => onGetRun(event))
    .catch(ui.failure)
}

const onDeleteRun = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  const run = id.run.id
  console.log(id)
  api.deleteRun(run)
    .then(() => onGetRun(event))
    .then(ui.onDeleteRunSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateRun,
  onGetRun,
  onUpdateRun,
  onDeleteRun
}
