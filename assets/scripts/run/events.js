'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')
const onCreateRun = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createRun(userData)
    .then(ui.createRunSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateRun
}
