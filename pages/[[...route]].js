import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Main() {
  const [secondsRemaining, setSecondsRemaining] = useState(5)

  const router = useRouter()
  const route = router?.query?.route || []

  const desiredRoute = route.join('/')

  // Take advantage of SSR
  // Make entire page configurable

  useEffect(() => {
    const timeoutID = setTimeout(countdown, 1000)
    return () => clearTimeout(timeoutID)
  }, [secondsRemaining])

  const countdown = () => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1)
    } else {
      window.location.href = `https://www.sportsnet.ca/${desiredRoute}`
    }
  }

  return (
    <main>
      <div className="relative px-6 lg:px-8 pt-20 sm:pt-32">
        <h1 className="text-4xl text-center mb-4">
          This is Sports<strong>ent</strong>.ca
        </h1>
        <div className="flex justify-center mx-auto ">
          <div className="relative overflow-hidden rounded-full py-1.5 px-8 text-sm text-center text-gray-600 leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            You're probably looking for Sportsnet.ca.
            <br />
            <a href="https://www.sportsnet.ca" className="font-semibold text-indigo-600">
              Taking you there in {secondsRemaining} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
