module.exports = function (fn, xs) {
  var i = 0, len = xs.length;

  for (; i < len; i++) {
    fn(xs[i], i);
  }
};