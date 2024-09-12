function timestamp()
{
const timeObj=new Date()

const hrs=timeObj.getHours()
const mins=timeObj.getMinutes()
const secs=timeObj.getSeconds()
const dte=timeObj.getDate()
const mnth=timeObj.getMonth()+1
const yr=timeObj.getFullYear()

const timeFormatter=(timeStr)=>timeStr<10?'0'+timeStr:timeStr
const timeString=`${timeFormatter(hrs)}:${timeFormatter(mins)}:${timeFormatter(secs)} ${timeFormatter(dte)}-${timeFormatter(mnth)}-${yr}`

return timeString
}

export default timestamp
