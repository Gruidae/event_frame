(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      // 根据屏幕尺寸计算新的根字体大小..屏幕分成10份
      docEl.style.fontSize = 75 * (clientWidth / 750) + 'px';
    };

  if (doc.addEventListener) {
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }
})(document, window);
