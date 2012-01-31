exports.code = {};
exports.string = {};
exports.html = {};
for (var i = 9650, k, x; i < 9670; i++) {
  k = i < 9654 ? 'UP' : i < 9660 ? 'RIGHT' : i < 9664 ? 'DOWN' : 'LEFT';
  k += i % 2 ? '_WHITE' : '_BLACK';
  x = (i - 9650 + (i > 9663 ? 4 : i > 9653 ? 2 : 0)) % 6 / 2;
  k += x < 1 ? '' : x < 2 ? '_SMALL' : '_POINTER';
  exports.code[k] = i;
  exports.string[k] = String.fromCharCode(i);
  exports.html[k] = '&#' + i + ';';
}
