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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzR1RraDVEWHN4aW1JVzFBSHJVM0xoSkdCSVZxSnJnMHV5WVpiamZ1UElRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiSDhkd0d2TVJqNldualNISVFCNVlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3ZjA3YzcxLWJhM2ItNDY0NS04ZjEzLTI4NTE1M2FiOGJjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDU3LFxuICAgICAgMTc2LFxuICAgICAgMTU2LFxuICAgICAgMTMyLFxuICAgICAgMjMsXG4gICAgICA3OCxcbiAgICAgIDExNixcbiAgICAgIDk0LFxuICAgICAgMjQ3LFxuICAgICAgMTA2LFxuICAgICAgODgsXG4gICAgICAyMixcbiAgICAgIDIxMSxcbiAgICAgIDg4LFxuICAgICAgMjA1LFxuICAgICAgMTUwLFxuICAgICAgNDYsXG4gICAgICAxNDIsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA3LFxuICAgICAgNTgsXG4gICAgICAxMjYsXG4gICAgICAxNTMsXG4gICAgICA4MCxcbiAgICAgIDIzMyxcbiAgICAgIDExMSxcbiAgICAgIDE0OSxcbiAgICAgIDIwMyxcbiAgICAgIDEwMixcbiAgICAgIDM4LFxuICAgICAgMTY0LFxuICAgICAgMjQ2LFxuICAgICAgMzAsXG4gICAgICAxODAsXG4gICAgICAxMTAsXG4gICAgICAxMTksXG4gICAgICA2NCxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUzRYWk1FQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA3MDQ5NTc2OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsOYYsO6bWTDqWF0aCBUdlwiLFxuICAgIFwibGlkXCI6IFwiMjI3MDU4MjEwODc3NTgzOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MYXFma0RFTzZlNnJRR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibXhldFJ5bHRiSWJCemd1VXJqa29JbkJJMEJ6ZDhldU1nSGN2ZTM1OEttdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0UkJXREJObjQwcjZ1WDM0clowWFVlYmJqa09Rbk9zc3N6NVZ3emdYZWNvUUtTa3c2MmR0cmQvVjhJT051ZUtvRExaekk5NTkzZE5hUTNUYmZka2ZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqRUVObVh6WVF3WEdSKy9kZmNVaVBkOGRnVEVodWRqb0IxcUVjL0o1RE1tV1Y1c21jSHhaNDBDclAyZ2loM0l0dFJNdGlXUUlhc2I4K2JnZ1l4Q0hDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcwNDk1NzY5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwNTI5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Øbúmdéath BOT",
  ownername:process.env.OWNER_NAME|| "Øbúmdéath",


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
