import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import { Transition, Dialog } from '@headlessui/react'
import { FirebaseConfigContext } from '@/lib/contexts'
import { initializeApp } from 'firebase/app'

export default function ContactForm() {
  const firebaseConfig = useContext(FirebaseConfigContext)
  const cancelButtonRef = useRef(null)
  const [firestore, setFirestore] = useState(undefined)
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    verify_code: ''
  })
  const [processing, setProcessing] = useState(false)
  const [showValidation, setShowValidation] = useState(false)
  const [open, setOpen] = useState(false)
  const verifyCodeRef = useRef(null)
  const randomIntSet = () => [
    Math.floor(Math.random() * 7 + 1),
    Math.floor(Math.random() * 7 + 1)
  ]
  const [verifySet, setVerifySet] = useState([1, 1])
  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    setFirestore(getFirestore(app))
    setVerifySet(randomIntSet())
  }, [firebaseConfig])
  const handleChange = e =>
    setData({
      ...data,
      [e.target.name]: e.target.value
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
        doc(firestore, 'responses', now.toFormat('yyyy-MM-dd hh:mm:ss a')),
        {
          to: atob('ZHNldW0yMkBnbWFpbC5jb20='),
          message: {
            subject: `Message @ ${now.toFormat('ff')}`,
            html: `<b>Name:</b> ${`${data.first_name} ${data.last_name}`}<br><br><b>Email:</b> ${
              data.email
            }<br><br><b>Message:</b><br>${data.message}`
          },
          map: {
            name: `${data.first_name} ${data.last_name}`,
            email: data.email,
            message: data.message
          }
        }
      )
        .then(() => {
          setOpen(true)
          setShowValidation(false)
          setProcessing(false)
          setData({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            verify_code: ''
          })
          setVerifySet(randomIntSet())
        })
        .catch(() => {
          setProcessing(false)
        })
    } else {
      setShowValidation(true)
    }
  }
  return (
    <>
      <form
        className={classNames(
          showValidation && 'show-validation',
          'relative mb-3'
        )}
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset className="grid grid-cols-1 gap-4 px-1" disabled={processing}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-600 sm:text-base">
                Information: What is your personal contact?
              </label>
              <div className="grid gap-4 md:grid-cols-2">
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
            <label className="text-sm text-gray-600 sm:text-base">
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
                className="ml-3 w-min shrink-0 rounded-md border border-gray-400 px-2 text-gray-600 transition duration-200 hover:border-gray-600 hover:text-gray-900 focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-800 disabled:pointer-events-none disabled:cursor-default"
                type="submit"
              >
                <ArrowRightIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-20 overflow-y-auto"
          open={open}
          onClose={setOpen}
          initialFocus={cancelButtonRef}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-32 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                <div className="mt-8 mb-4 bg-white px-8">
                  <h3 className="text-2xl font-bold text-gray-500 sm:text-3xl">
                    Success!
                  </h3>
                  <p className="mt-2 text-lg !leading-relaxed text-gray-500 sm:text-xl">
                    The email has been sent. I will usually respond within the
                    week unless I am taking a significant break.
                  </p>
                </div>
                <div className="mb-6 flex items-center justify-center">
                  <button
                    type="button"
                    ref={cancelButtonRef}
                    onClick={() => setOpen(false)}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                  >
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
