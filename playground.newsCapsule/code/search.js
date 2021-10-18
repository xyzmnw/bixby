http = require("http")
var console = require("console")
module.exports.function = function search(q, language,domains) {
  var url = "https://newsapi.org/v2/everything?apiKey=497523214d6e42cb92a8b8f22ef22960"
  var options = {
    "Accept": "application/json"
  }
  var ret = {}

  if (typeof (domains) != "undefined") {
    options["domains"] = domains
  }
  if (typeof (q) != "undefined") {
    options["q"] = q
  }
  if (typeof (language) != "undefined") {
    options["language"] = language
  }
  try {
    res = http.getUrl(url, { query: options })
    ret = JSON.parse(res)
  } catch (err) {
    console.log("Error: " + err)

  }



  var sizeOfRes = ret.articles.length;
  const artPack = [];
  for (let k = 0; k < sizeOfRes; k++) {
     
     let  pageUrl = new String(ret.articles[k].url);

    var strtIndex = 8;
    if (pageUrl.indexOf('www.') != -1) {
      strtIndex = pageUrl.indexOf('www.');
     
      strtIndex += 4;
    }
    var endIndex = pageUrl.indexOf('/',strtIndex);
    


    var faviUrl = "https://www.google.com/s2/favicons?domain="
   

    let domainName = pageUrl.substring(strtIndex, endIndex);
     faviUrl = faviUrl.concat(domainName);

    artPack[k] = {
      
      "faviUrl": faviUrl,
      "articles": ret.articles[k]
    }


  }
  


  return artPack;
}
