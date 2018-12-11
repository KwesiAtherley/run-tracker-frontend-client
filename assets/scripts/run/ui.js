'use strict'
const showRunsTemplate = require('../templates/helpers/runs-listing.handlebars')
const store = require('../store.js')

const onGetRunSuccess = function (data) {
  const showRunsHtml = showRunsTemplate({ runs: data.runs })
  $('.content').html(showRunsHtml)
}

const onUpdateRunSuccess = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Your run has been updated')
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}

const createRunSuccess = function (data) {
  store.runId = data.run.id
  $('#run-message').show(500)
  $('#run-message').html('Your run has been created')
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}

const onDeleteRunSuccess = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Your run has been deleted')
  $('#delete-run').trigger('reset')
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}
module.exports = {
  onGetRunSuccess,
  onUpdateRunSuccess,
  createRunSuccess,
  onDeleteRunSuccess
}
