http=require("http")
var console = require("console")
module.exports.function = function search (q,language,domains) {
var url = "https://newsapi.org/v2/everything?apiKey=497523214d6e42cb92a8b8f22ef22960"   
  var options={
    "Accept" : "application/json"
  }
   var ret= {}
   if(typeof(q) != "undefined")
   {
     options["q"]=q
   }
   if(typeof(domains) != "undefined")
   {
     options["domains"]=domains
   }
   if(typeof(language) != "undefined")
   {
     options["language"]=language
   }
   try{
   res = http.getUrl(url,{query:options})
   ret=JSON.parse(res)
   }catch(err){
     console.log("Error: "+err)

   }
  return ret.articles
}
