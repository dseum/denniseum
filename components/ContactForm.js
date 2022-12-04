import { useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'

export default function ContactForm() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    verify_code: '',
  })
  const [processing, setProcessing] = useState(false)
  const [validate, setValidate] = useState(false)
  const verifyCodeRef = useRef(null)
  const randomIntSet = () => [
    Math.floor(Math.random() * 7 + 1),
    Math.floor(Math.random() * 7 + 1),
  ]
  const [verifySet, setVerifySet] = useState([1, 1])
  useEffect(() => {
    setVerifySet(randomIntSet)
  }, [])
  const handleChange = e =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  const handleSubmit = e => {
    e.preventDefault()
    if (parseInt(data.verify_code) !== verifySet[0] * verifySet[1]) {
      verifyCodeRef.current.setCustomValidity('Invalid verification code.')
    } else {
      verifyCodeRef.current.setCustomValidity('')
    }
    if (e.target.checkValidity()) {
      setProcessing(true)
      const now = DateTime.local().setZone('America/Chicago')
      setDoc(
        doc(getFirestore(), 'responses', now.toFormat('yyyy-MM-dd hh:mm:ss a')),
        {
          to: atob('ZHNldW0yMkBnbWFpbC5jb20='),
          message: {
            subject: `Message @ ${now.toFormat('ff')}`,
            html: `<b>Name:</b> ${`${data.first_name} ${data.last_name}`}<br><br><b>Email:</b> ${
              data.email
            }<br><br><b>Message:</b><br>${data.message}`,
          },
          map: {
            name: `${data.first_name} ${data.last_name}`,
            email: data.email,
            message: data.message,
          },
        }
      )
        .then(() => {
          setValidate(false)
          setProcessing(false)
          setData({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            verify_code: '',
          })
          setVerifySet(randomIntSet())
        })
        .catch(() => {
          setProcessing(false)
        })
    } else {
      setValidate(true)
    }
  }
  return (
    <form
      className={classNames(validate && 'form-validate', 'relative mb-3')}
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="grid grid-cols-1 gap-4 px-1" disabled={processing}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-gray-600 text-sm sm:text-base">
              Information: What is your personal contact?
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="first_name"
                type="text"
                value={data.first_name}
                onChange={handleChange}
                placeholder="First name"
                required
              />
              <input
                name="last_name"
                type="text"
                value={data.last_name}
                onChange={handleChange}
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <label className="text-gray-600 text-sm sm:text-base">
            Verification: What is {verifySet[0]} times {verifySet[1]}?
          </label>
          <div className="flex flex-nowrap">
            <input
              name="verify_code"
              type="text"
              value={data.verify_code}
              onChange={handleChange}
              placeholder="Code"
              ref={verifyCodeRef}
              required
            />
            <button
              className="transition duration-200 border border-gray-400 rounded-md w-min shrink-0 ml-3 px-2 hover:border-gray-600 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 disabled:pointer-events-none disabled:cursor-default"
              type="submit"
            >
              <ArrowRightIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
