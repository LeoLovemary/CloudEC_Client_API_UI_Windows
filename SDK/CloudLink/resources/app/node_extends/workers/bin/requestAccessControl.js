module.exports=function(n,e){return Promise.all([].slice.call(arguments," ")).then(function(e){var r=require("fs"),c=require("path"),i=['CreateObject("Shell.Application").ShellExecute "'+process.argv0+'", "", """'+e[1]+'"""'+(!1!==n?', "runas", 1':""),'CreateObject("Scripting.Filesystemobject").DeleteFile(WScript.ScriptFullName)'].join("\r\n").replace(/[\\\/]+/g,"\\\\"),t=process.env.TEMP,l=r.mkdtempSync(c.join(t,"WeLink-update-"))+".vbs";r.writeFileSync(l,i),require("child_process").execSync("wscript "+l,{cwd:e[1]}),process.exit()})};