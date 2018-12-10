'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const runEvents = require('./run/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.signup-btn').on('click', function () {
    $('#sign-up').show()
    $('#sign-in').hide()
  })
  $('.signin-btn').on('click', function () {
    $('#sign-in').show()
    $('#sign-up').hide()
  })
  $('#create-run').on('submit', runEvents.onCreateRun)
  $('#activity').on('click', runEvents.onGetRun)
  $('#update-run').on('submit', runEvents.onUpdateRun)
  $('#delete-run').on('submit', runEvents.onDeleteRun)
})
