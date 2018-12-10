'use strict'

const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = function (signUpFailureResponse) {
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').fadeOut(200)
  // $('.form-group').removeClass('hidden')
  $('#update-run').removeClass('hidden')
  $('#create-run').removeClass('hidden')
  $('#activity').removeClass('hidden')
  $('#delete-run').removeClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signOutSuccess = function () {
  $('#message').html('You signed out successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').addClass('hidden')
  $('#change-password').trigger('reset')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  // $('#sign-in').fadeIn(200)
  $('#create-run').addClass('hidden')
  $('#activity').addClass('hidden')
  $('#update-run').addClass('hidden')
  $('#delete-run').addClass('hidden')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
