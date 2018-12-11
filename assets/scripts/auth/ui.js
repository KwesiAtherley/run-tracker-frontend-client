'use strict'

const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').show(500)
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 2000)
}

const failure = function (signUpFailureResponse) {
  $('#message').show(500)
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 2000)
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').show(500)
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').fadeOut(200)
  $('#update-run').removeClass('hidden')
  $('#create-run').removeClass('hidden')
  $('#activity').removeClass('hidden')
  $('#delete-run').removeClass('hidden')
  $('.signout-btn').removeClass('hidden')
  $('.changepass-btn').removeClass('hidden')
  $('.signin-btn').addClass('hidden')
  $('.signup-btn').addClass('hidden')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 2000)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').show(500)
  $('#message').html('You changed your password successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 2000)
}

const signOutSuccess = function () {
  $('#message').show(500)
  $('#message').html('You signed out successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').addClass('hidden')
  $('#change-password').trigger('reset')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#create-run').addClass('hidden')
  $('#activity').addClass('hidden')
  $('#update-run').addClass('hidden')
  $('#delete-run').addClass('hidden')
  $('#delete-run').trigger('reset')
  $('.signin-btn').removeClass('hidden')
  $('.signup-btn').removeClass('hidden')
  $('.signout-btn').addClass('hidden')
  $('.changepass-btn').addClass('hidden')
  $('#run-message').addClass('hidden')
  $('#create-run').trigger('reset')
  $('#update-run').trigger('reset')
  $('#content').empty()
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 2000)
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
