var xmlHttp = (function () {
  var xmlHttpMethod = false;
  try {
    xmlHttpMethod = new window.XMLHttpRequest();
  } catch (e) {
    xmlHttpMethod = new window.ActiveXObject('Microsoft.XMLHTTP');
  }
  return function () {
    return xmlHttpMethod;
  };
}());

function ajax (url, callback) {
  var req = xmlHttp();
  if (!req || !url || typeof url !== 'string') return;
  req.open('GET', url, true);
  req.onreadystatechange = function () {
    if (req.readyState !== 4 || req.state !== 200 && req.status !== 304) {
      return;
    }
    if (typeof callback === 'function') callback(req.responseText);
  }
  if (req.readyState === 4) return;
  req.send(null);
};
