import dayjs from 'dayjs'
import './style.css'

const submitBtn = document.getElementById('submitBtn')
const closeBtn  = document.getElementById('closeBtn')
const dialog    = document.getElementById('resultDialog')
const resultText = document.getElementById('resultText')

submitBtn.addEventListener('click', () => {
  const day   = parseInt(document.getElementById('day').value)
  const month = parseInt(document.getElementById('month').value)

  if (!day || !month || day < 1 || day > 31 || month < 1 || month > 12) {
    alert('Podaj poprawny dzień i miesiąc')
    return
  }

  const today      = dayjs()
  const thisYear   = today.year()

  const birthdayThisYear = dayjs(`${thisYear}-${month}-${day}`)

  const birthDate  = dayjs(`2000-${month}-${day}`)
  const refToday   = dayjs(`2000-${today.month() + 1}-${today.date()}`)

  const daysPassed = refToday.diff(birthDate, 'day')

  let nextBirthday = birthdayThisYear
  if (today.isAfter(birthdayThisYear) || today.isSame(birthdayThisYear, 'day')) {
    nextBirthday = dayjs(`${thisYear + 1}-${month}-${day}`)
  }
  const weeksLeft = nextBirthday.diff(today, 'week')

  const isToday = today.date() === day && (today.month() + 1) === month

  let msg = ''

  if (isToday) {
    msg = `Wszystkiego najlepszego! Dziś masz urodziny!\n\nOd Twoich urodzin minęło 0 dni — to dzisiaj!`
  } else {
    msg = `Od Twojej daty urodzenia minęło ${daysPassed} dni.`

    if (weeksLeft === 0) {
      msg += `\n\nMasz urodziny w tym tygodniu!`
    } else {
      msg += `\n\nDo kolejnych urodzin pozostało ${weeksLeft} tygodni`
    }
  }

  resultText.innerText = msg
  dialog.showModal()
})

closeBtn.addEventListener('click', () => dialog.close())