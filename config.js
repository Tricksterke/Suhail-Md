const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_34_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibzlNMkdBTU1kOVVQMUlpRmRtaW5IbmZKcG1SMXhEUmg0T2lEcnVCMG4wdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnhTMjVKYVVSNVM5cVRMdFBWMTNJZ1wiLFxuICBcInBob25lSWRcIjogXCI5OTZjMjk3NS1jZDkwLTRjOTctOGQ4Yi1jZTllZDNhOTM5NmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyOCxcbiAgICAgIDE2OCxcbiAgICAgIDEyNSxcbiAgICAgIDE0OSxcbiAgICAgIDU4LFxuICAgICAgMjUzLFxuICAgICAgMTc1LFxuICAgICAgMTM0LFxuICAgICAgMTI0LFxuICAgICAgMTU0LFxuICAgICAgMTE5LFxuICAgICAgMTI2LFxuICAgICAgMjUzLFxuICAgICAgMCxcbiAgICAgIDY4LFxuICAgICAgMTQ1LFxuICAgICAgMTY4LFxuICAgICAgMTg4LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMTMsXG4gICAgICAxNDQsXG4gICAgICAyMDQsXG4gICAgICAyMyxcbiAgICAgIDE0NCxcbiAgICAgIDEzMyxcbiAgICAgIDE5MCxcbiAgICAgIDc1LFxuICAgICAgMjIwLFxuICAgICAgMTU1LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICAxNzYsXG4gICAgICA3NCxcbiAgICAgIDExOCxcbiAgICAgIDEyNSxcbiAgICAgIDkwLFxuICAgICAgMzAsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVhQVkgxM05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5OTYwNTY1Njo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzNzQwNTQ4MjA2NjQ5Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01XYnA2a0hFSUt5M2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmZLNjNtSjltejBLZnZ6V0dMNlVaUDB3V2ZLTTFWczhyMUQvYTY3OWFYYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsN21KVnlKMHhlSE5rNkVYREhrR25sRGJJeGhlaXBDaUE3RjRoMGdUY05pK0FpVllXV2FmbmFJQm5TMGRXSnBJMmFkTmk1WXlkN3ExcVZqdkp0dldqUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvSU42TEVLeWZOeW0yNnJ0SFJ2bmd3TGdkOWI4MlhIUElqcnpWVFVwYjJoUSs2YXA5RU5DVWY5YVFFSDhHemtCS3YwRUxqMEZ1aVBUMmliL2V5dGZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTk2MDU2NTY6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAwMDQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdqSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2pILmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzlqOXlTUGVtZjVraHFCbkRHaGFoanE4L2gxZmFFUHQvMGpwbHNBbXg1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY1NjczOTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwMDA0NTQxNTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
