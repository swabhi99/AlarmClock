const time = document.querySelector('#time')
const day = document.querySelector('#day')
const add = document.querySelector('#add')
const alarms = document.querySelector('.alarms')
const cancel = document.querySelector('.cancel')

class Clock{

    alarms = []

    setAlarm(time){

    }
}

add.addEventListener('click',()=>{
    const date = new Date()
    const hh = parseInt(time.value.split(":")[0])
    const min = parseInt(time.value.split(":")[1])

    const currDate = date.getDate()
    const currDay =date.getDay()
    const currHours = date.getHours()
    const currMins = date.getMinutes()
    const currYear = date.getFullYear()
    const currMonth = date.getMonth()

    console.log(currDate)
    
    let alarmTime = new Date(currYear,currMonth)

    console.log(date)
})