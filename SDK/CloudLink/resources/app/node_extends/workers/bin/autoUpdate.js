var fs=require("fs"),path=require("path"),update=require("./update"),deepRemove=require("./deepRemove"),createPath=require("./createPath"),getConfig=require("./config").getConfig,setConfig=require("./config").setConfig,applyUpdate=require("./applyUpdate"),electron=require("electron");module.exports=function(e,n,t){if(e&&n){setConfig({RELEASE_SERVER_ADDRESS:n,APP_DATA_PATH:e});var i=path.join(e,"releases"),r=path.join(path.dirname(process.argv0),"resources\\app");fs.existsSync(i)||createPath(i);var s=path.join(i,"version.json"),o=path.join(r,"version.json"),c=function(e,n,t,i,r){var s={};for(var o in e)if(o in n)if(n[o]instanceof Object&&e[o]instanceof Object)fs.existsSync(path.join(i,t,o))||fs.mkdirSync(path.join(i,t,o)),s[o]=c(e[o],n[o],path.join(t,o),i,r);else if(e[o]!==n[o])s[o]=e[o];else{var a=fs.readFileSync(path.join(r,t,o)),f=path.join(i,t);fs.writeFileSync(path.join(f,o),a)}return s},a=function(e,n){t.send("needUpdate",{preversion:e,version:n})};if(!fs.existsSync(s)){if(fs.existsSync(o)){p=JSON.parse(fs.readFileSync(o).toString());return update().then(function(t){if(t!==p.version)return fs.existsSync(path.join(i,t))||fs.mkdirSync(path.join(i,t)),update(t).then(function(e){if(p instanceof Object&&e instanceof Object){var n=c(e,p.versions,"",path.join(i,t),r);return update(t,n,i).then(function(){fs.writeFileSync(s,JSON.stringify({versions:e,version:t,update_time:new Date},null,4)),a(p.versions,t)})}})})}return update().then(function(n){return update(n,!0,i).then(function(e){fs.writeFileSync(s,JSON.stringify({versions:e,version:n,update_time:new Date},null,4)),a("",n)})})}try{var f=JSON.parse(fs.readFileSync(s).toString()),p=fs.existsSync(o)?JSON.parse(fs.readFileSync(o).toString()):{version:""};return update().then(function(t){return t!==p.version?(fs.existsSync(path.join(i,t))||fs.mkdirSync(path.join(i,t)),update(t).then(function(e){if(f instanceof Object&&e instanceof Object){if(t===f.version)return void a(p.version,t);var n=c(e,f.versions,"",path.join(i,t),path.join(i,f.version));return update(t,n,i).then(function(){fs.writeFileSync(s,JSON.stringify({versions:e,version:t,update_time:new Date},null,4)),a(p.version,t)})}})):Promise.resolve(!1)})}catch(e){throw"version.json is not corect!"}}};