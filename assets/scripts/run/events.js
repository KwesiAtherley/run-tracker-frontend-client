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
  event.preventDefault()
  api.getRun()
    .then(ui.onGetRunSuccess)
    .catch(ui.failure)
}

const onUpdateRun = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log(userData)
  $(event.target).trigger('reset')
  api.UpdateRun(userData)
    .then(ui.updateRunSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateRun,
  onGetRun,
  onUpdateRun
}
