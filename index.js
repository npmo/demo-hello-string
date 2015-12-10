module.exports = function helloString (name) {
  return 'Hello' + (name ? ' ' + name : '')
}
