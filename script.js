const DateTime = luxon.DateTime

const releaseDate = DateTime.fromISO("2021-07-15T12:00:00+02:00")

const monthEl = document.querySelector(".timer__value--month")
const dayEl = document.querySelector(".timer__value--day")
const hourEl = document.querySelector(".timer__value--hour")
const minEl = document.querySelector(".timer__value--min")

function twoChars(value) {
  if (typeof value === "number") {
    value = value + ""
  }
  if (value.length > 1) return value
  return "0" + value
}

function tick() {
  const diff = releaseDate.diff(DateTime.now(), ["months", "days", "hours", "minutes", "seconds", "milliseconds"])
  monthEl.innerText = twoChars(diff.months)
  dayEl.innerText = twoChars(diff.days)
  hourEl.innerText = twoChars(diff.hours)
  minEl.innerText = twoChars(diff.minutes)
}

tick()
setInterval(() => {
  tick()
}, 1000)




// Form
const emailEl = document.querySelector(".email-input__textbox")
const formEl = document.querySelector(".email-input")
const submitEl = document.querySelector(".email-input__submit")
const loadingClass = "email-input__submit--loading"

formEl.addEventListener("submit", (e) => {
  if (submitEl.classList.contains(loadingClass)) return

  e.preventDefault()
  e.stopPropagation()
  submitEl.classList.add(loadingClass)

  const value = emailEl.value

  fetch(`https://emailbot.mysyndic.com?email=${value}`)

  setTimeout(() => {
    submitEl.innerText = "Verstuurd!"
    submitEl.classList.remove(loadingClass)
  }, 2000)
})