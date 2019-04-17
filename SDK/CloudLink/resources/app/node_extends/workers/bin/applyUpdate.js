var fs=require("fs"),path=require("path"),deepRemove=require("./deepRemove"),createPath=require("./createPath"),requestAccessControl=require("./requestAccessControl"),getConfig=require("./config").getConfig;function deepCopy(r,s){if(fs.existsSync(r)){if(fs.existsSync(s)&&deepRemove(s),fs.statSync(r).isDirectory())return createPath(s),fs.readdirSync(r).forEach(function(e){deepCopy(path.join(r,e),path.join(s,e))});fs.writeFileSync(s,fs.readFileSync(r))}}var copy_updata_token="--copy-update-data";module.exports=function(){if(0===arguments.length||!/releases$/i.test(process.cwd())||!fs.existsSync("version.json"))return requestAccessControl(copy_updata_token,path.join(getConfig().APP_DATA_PATH,"releases"));var e=process.cwd(),r=path.join(path.dirname(process.argv0),"resources\\app");if(!(e&&r&&fs.existsSync(e)&&fs.existsSync(r)))return requestAccessControl(!1,process.env.USERPROFILE);var s=path.join(e,"version.json"),c=path.join(r,"version.json");if(!fs.existsSync(s)||fs.statSync(s).isDirectory())return requestAccessControl(!1,process.env.USERPROFILE);var t=JSON.parse(fs.readFileSync(s).toString()),i=fs.existsSync(i)?JSON.parse(fs.readFileSync(c).toString()):{version:""};if(i.version===t.version)return deepRemove(e)|requestAccessControl(!1,process.env.USERPROFILE);var n=path.join(e,t.version);try{require("child_process").execSync("taskkill /f /im tup_service*",{shell:!0})}catch(e){fs.writeFileSync("c:\\WeLink_update_error.log",e.toString(),{flag:"a"})}try{require("child_process").execSync('xcopy /s /q /d /y "'+n+'" "'+r+'_temp\\"'),require("child_process").execSync('rd /s /q "'+r+'"'),require("child_process").execSync('move "'+r+'_temp" "'+r+'"'),require("child_process").execSync('rd /s /q "'+n+'"'),require("child_process").execSync('del /s /q "'+s+'"');try{require("child_process").execSync("net start TUPService")}catch(e){}fs.existsSync("c:\\WeLink_update_error.log")&&fs.unlinkSync("c:\\WeLink_update_error.log")}catch(e){fs.writeFileSync("c:\\WeLink_update_error.log",e.toString(),{flag:"a"});try{require("child_process").execSync("net start TUPService")}catch(e){}}fs.writeFileSync(c,JSON.stringify(t,null,4)),requestAccessControl(!1,process.env.USERPROFILE)},module.exports.check=function(){return 0===process.cwd().indexOf(process.env.APPDATA)&&/releases$/i.test(process.cwd())&&require("fs").existsSync("version.json")};