export function getExplore() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (Sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (Sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (Sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (Sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (Sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (Sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (Sys.safari = s[1])
    : 0;

  if (Sys.ie) return "IE: " + Sys.ie;
  if (Sys.edge) return "EDGE: " + Sys.edge;
  if (Sys.firefox) return "Firefox: " + Sys.firefox;
  if (Sys.chrome) return "Chrome: " + Sys.chrome;
  if (Sys.opera) return "Opera: " + Sys.opera;
  if (Sys.safari) return "Safari: " + Sys.safari;
  return "Unkonwn";
}

export function getExploreName() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    return "Opera";
  } else if (
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1
  ) {
    return "IE";
  } else if (userAgent.indexOf("Edge") > -1) {
    return "Edge";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } else if (
    userAgent.indexOf("Safari") > -1 &&
    userAgent.indexOf("Chrome") == -1
  ) {
    return "Safari";
  } else if (
    userAgent.indexOf("Chrome") > -1 &&
    userAgent.indexOf("Safari") > -1
  ) {
    return "Chrome";
  } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return "IE>=11";
  } else {
    return "Unkonwn";
  }
}

function processForChrome(id, a_top, c_top) {
  var a_top_s, c_top_s;

  var screen_width = document.body.clientWidth;

  if (id < 4) {
    if (screen_width < 1400 && screen_width >= 977) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else if (screen_width < 977 && screen_width >= 752) {
      a_top_s = a_top - 0.12;
      c_top_s = c_top - 0.12;
    } else if (screen_width < 752) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 6) {
    if (screen_width < 1400 && screen_width >= 977) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else if (screen_width < 977 && screen_width >= 752) {
      a_top_s = a_top - 0.09;
      c_top_s = c_top - 0.09;
    } else if (screen_width < 752) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 11) {
    if (screen_width < 1400 && screen_width >= 977) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 977 && screen_width >= 752) {
      a_top_s = a_top - 0.02;
      c_top_s = c_top - 0.02;
    } else if (screen_width < 752) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else {
    if (screen_width < 1400 && screen_width >= 977) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 977 && screen_width >= 752) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 752) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  }

  var result = [a_top_s, c_top_s];

  return result;
}

function processForSafari(id, a_top, c_top) {
  var a_top_s, c_top_s;

  var screen_width = document.body.clientWidth;

  if (id < 4) {
    if (screen_width < 1400 && screen_width >= 992) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else if (screen_width < 992 && screen_width >= 768) {
      a_top_s = a_top - 0.2;
      c_top_s = c_top - 0.2;
    } else if (screen_width < 768) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 6) {
    if (screen_width < 1400 && screen_width >= 992) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else if (screen_width < 992 && screen_width >= 768) {
      a_top_s = a_top - 0.15;
      c_top_s = c_top - 0.15;
    } else if (screen_width < 768) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 11) {
    if (screen_width < 1400 && screen_width >= 992) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 992 && screen_width >= 768) {
      a_top_s = a_top - 0.07;
      c_top_s = c_top - 0.07;
    } else if (screen_width < 768) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else {
    if (screen_width < 1400 && screen_width >= 992) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 992 && screen_width >= 768) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 768) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  }

  var result = [a_top_s, c_top_s];

  return result;
}

function processForFirefox(id, a_top, c_top) {
  var a_top_s, c_top_s;

  var screen_width = document.body.clientWidth;

  if (id < 4) {
    if (screen_width < 1400 && screen_width >= 976) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else if (screen_width < 976 && screen_width >= 753) {
      a_top_s = a_top - 0.2;
      c_top_s = c_top - 0.2;
    } else if (screen_width < 753) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 6) {
    if (screen_width < 1400 && screen_width >= 976) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else if (screen_width < 976 && screen_width >= 753) {
      a_top_s = a_top - 0.15;
      c_top_s = c_top - 0.15;
    } else if (screen_width < 753) {
      a_top_s = a_top + 0.01;
      c_top_s = c_top + 0.01;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else if (id < 11) {
    if (screen_width < 1400 && screen_width >= 976) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 976 && screen_width >= 753) {
      a_top_s = a_top - 0.07;
      c_top_s = c_top - 0.07;
    } else if (screen_width < 753) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  } else {
    if (screen_width < 1400 && screen_width >= 976) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 976 && screen_width >= 753) {
      a_top_s = a_top;
      c_top_s = c_top;
    } else if (screen_width < 753) {
      a_top_s = a_top + 0.0;
      c_top_s = c_top + 0.0;
    } else {
      a_top_s = a_top;
      c_top_s = c_top;
    }
  }

  var result = [a_top_s, c_top_s];

  return result;
}

export function compensate(id, a_top, c_top) {
  var brower = getExploreName();

  var result;

  switch (brower) {
    case "Chrome":
      result = processForChrome(id, a_top, c_top);

      break;

    case "Safari":
      result = processForSafari(id, a_top, c_top);

      break;

    case "Firefox":
      result = processForFirefox(id, a_top, c_top);

      break;

    default:
      result = processForSafari(id, a_top, c_top);
  }

  return result;
}
