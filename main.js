const time = document.querySelector('.time'),
  date = document.querySelector('.date')

setInterval(() => {
  let TIME = new Date();

  let hh = TIME.getHours()
  let mm = TIME.getMinutes()
  let ss = TIME.getSeconds()
  let DD = TIME.getDate()
  let MM = TIME.getMonth()
  let YYYY = TIME.getFullYear()
  
  if (hh < 10) {
    hh = '0'+hh
  }
  if (hh > 12) {
    hh = hh - 12
  }
  
  if (ss < 10) {
    ss = '0'+ss
  }
  
  if (MM === 1) {
    MM = 'Jan'
  }
  if (MM === 2) {
    MM = 'Feb'
  }
  if (MM === 3) {
    MM = 'March'
  }
  if (MM === 4) {
    MM = 'April'
  }
  if (MM === 5) {
    MM = 'May'
  }
  if (MM === 6) {
    MM = 'Jun'
  }
  if (MM === 7) {
    MM = 'July'
  }
  if (MM === 8) {
    MM = 'Aug'
  }
  if (MM === 9) {
    MM = 'Set'
  }
  if (MM === 10) {
    MM = 'Oct'
  }
  if (MM === 11) {
    MM = 'Nov'
  }
  if (MM === 12) {
    MM = 'Dec'
  }
  
  if (DD < 10) {
    DD = '0'+DD
  }

  time.innerText = `${hh} : ${mm} : ${ss}`
  date.innerText = `${DD} - ${MM} - ${YYYY}`
}, 1)
