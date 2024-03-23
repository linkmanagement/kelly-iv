window.addEventListener('load', () => {
    const timer = document.getElementById('timer')
    const updateTimer = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60
        if (timer) {
            timer.innerHTML = `${hours}h ${minutes < 10 ? '0' : ''}${minutes}m ${
          remainingSeconds < 10 ? '0' : ''
        }${remainingSeconds}s`
        }
    }

    const startCountdown = () => {
        const savedCountdownTime = localStorage.getItem('countdownTime')
        let seconds =
            savedCountdownTime > 0 ? parseInt(savedCountdownTime, 10) : (60 * 32) + 30

        updateTimer(seconds)

        const countdownInterval = setInterval(() => {
            seconds--
            updateTimer(seconds)
            localStorage.setItem('countdownTime', seconds.toString())

            if (seconds <= 0) {
                clearInterval(countdownInterval)
                startCountdown() // Restart the countdown
            }
        }, 1000)
    }

    const startAvailableCountdown = () => {
        const isAvailable = localStorage.getItem('isAvailable')
        const availableBlock = document.getElementById('available')
        const userStatusBlock = document.getElementById('user-status')
        if (isAvailable === 'true') {
            availableBlock.innerHTML = 'Available now'
            userStatusBlock.classList.add('available')
        } else {
            setTimeout(() => {
                availableBlock.innerHTML = 'Available now'
                userStatusBlock.classList.add('available')
                localStorage.setItem('isAvailable', 'true')
            }, 2000)
        }
    }

    startAvailableCountdown()

    startCountdown()

    const subtractDaysFromDate = (days) => {
        const currentDate = new Date()
        const newDate = new Date(currentDate)

        if (days < 0) {
            newDate.setDate(currentDate.getDate() - -days)
        } else {
            newDate.setDate(currentDate.getDate() + days)
        }
        return newDate.toString().toLowerCase()
    }

    const setLocationPeriod = (location) => {
        const locationPeriod = document.getElementById('time-in-current-location')
        const locationName = document.getElementById('location-name')
        locationName.innerHTML = `${location.city}, ${location.country}`

        locationPeriod.innerHTML = `I’m staying in ${location.city.toLowerCase()} from ${subtractDaysFromDate(-4).substring(
        3,
        10,
      )} to ${subtractDaysFromDate(2).substring(
        3,
        10,
      )} 🥰 <br/> matches only: send me a ❤️
          in my DMs`
    }

    const getLocation = async () => {
        // let reponse = await fetch('https://ipinfo.io?token=d84134a453eac9')
        reponse = await fetch('https://link-management-server.vercel.app/api/getIpInfo')
        const result = await reponse.json()
        setLocationPeriod(result)
        return result
    }

    getLocation()
})
