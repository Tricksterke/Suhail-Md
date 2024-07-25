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
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_09_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVia3R6UG10UG5FQ0hXRzFWRWFYd0x2cXBwUmpyQjNyUm5vUDBUamZWK0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTA0NjcxNjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NDMwMzMzNjhGQTdCMDRCREJBMUU3QjFBNTgwOUZFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYzNTQ1ODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0FJOVltcXFTeG1XMTJrZW91Y0lVQVwiLFxuICBcInBob25lSWRcIjogXCI1YmRhNmJlNC0xYjBiLTQ0NWItYTQyZC1mYTg0MDViNWFhNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjQsXG4gICAgICA5OCxcbiAgICAgIDI0MyxcbiAgICAgIDkyLFxuICAgICAgNTEsXG4gICAgICAyNixcbiAgICAgIDIzNixcbiAgICAgIDc4LFxuICAgICAgMTEsXG4gICAgICA4LFxuICAgICAgMTIyLFxuICAgICAgMTEsXG4gICAgICA2MixcbiAgICAgIDIwMCxcbiAgICAgIDIxMyxcbiAgICAgIDk2LFxuICAgICAgNzUsXG4gICAgICAyMzMsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgODEsXG4gICAgICAyMjYsXG4gICAgICAyMDQsXG4gICAgICA3LFxuICAgICAgNDMsXG4gICAgICA3NCxcbiAgICAgIDI1NCxcbiAgICAgIDE4MyxcbiAgICAgIDIyMyxcbiAgICAgIDk5LFxuICAgICAgMixcbiAgICAgIDI4LFxuICAgICAgMzUsXG4gICAgICAyNTAsXG4gICAgICAxNTksXG4gICAgICAyMTQsXG4gICAgICAyMjksXG4gICAgICAxMzcsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYnBqdG9CRUpMOHRiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9lb3RIcHJFdGtZN2J5SlphUEJsQm56Z0RFYXllWmpYNFBsdnErUDluQlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzFXSHhJMW8yWHV2ZTMrak0wZi9jR29tdVF2TWdDRFhwa0twWEdaVEdNWFRxSGlnalhpV3BDYWRBenpPdm5hc1BSNDYxTXEya0YwV0hjbDY0UkRoQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNi96amh3aElZdmFtWjZuY052ZGZvZXRseFFVSkFqRm1XekVrdXNZeHBBcUF2bExmQXNtL3FaUXo1QlBmc1J3NmpUM3ZrSlluOVhFUGZGMTdYdlRlaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMDQ2NzE2MTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFubmEgYmVsbGVcIixcbiAgICBcImxpZFwiOiBcIjEzNTIxNDY0Njk1MjE4NDo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTA0NjcxNjEzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MzU0NTgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSW1uXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJbW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVTDQ3V2NxRmpHV290a0hDMDNsTnNMaWZNMnR0TVZLQmZ2MHNyc0hkNlhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1NzQyMTk3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW1uLmpzb24iOiAie1wia2V5RGF0YVwiOlwibldOelFEUEZOdUM0RzFPcDVGMVRnVkZtL2htc3hXZi9Kbmw0LzU0QWxuYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTc0MjE5NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYzNTQ1NTM2OTdcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
