'use strict'
const showRunsTemplate = require('../templates/helpers/runs-listing.handlebars')
const store = require('../store.js')

const onGetRunSuccess = function (data) {
  const showRunsHtml = showRunsTemplate({ runs: data.runs })
  $('.content').html(showRunsHtml)
  $('#run-message').show(500)
  $('#run-message').html(`Total Runs: ${data.runs.length}`)
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}

const getRunFailure = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Have you been running?, We should start today, no?')
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}

const onUpdateRunSuccess = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Your run has been updated')
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}
const updateRunFailure = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Something went wrong, please try again')
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

const createRunFailure = function (data) {
  $('#run-message').show(500)
  $('#run-message').html('Something went wrong, please try again')
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
  onDeleteRunSuccess,
  createRunFailure,
  updateRunFailure,
  getRunFailure
}
