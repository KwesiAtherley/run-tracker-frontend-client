'use strict'
const showRunsTemplate = require('../templates/helpers/runs-listing.handlebars')
const store = require('../store.js')

const onGetRunSuccess = function (data) {
  // console.log(data.directors)
  const showRunsHtml = showRunsTemplate({ runs: data.runs })
  $('.content').html(showRunsHtml)
  // $('#directors').html('list of directors')
}

const onUpdateRunSuccess = function (data) {
  $('#run-message').html('Your run has been updated')
}

const createRunSuccess = function (data) {
  // console.log(data)
  store.runId = data.run.id
  $('#run-message').html('Your run has been created')
}

const onDeleteRunSuccess = function (data) {
  $('#run-message').html('Your run has been deleted')
}
module.exports = {
  onGetRunSuccess,
  onUpdateRunSuccess,
  createRunSuccess,
  onDeleteRunSuccess
}
