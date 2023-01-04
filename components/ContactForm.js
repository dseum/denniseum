import { Fragment, useEffect, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import { Transition, Dialog } from '@headlessui/react'

export default function ContactForm() {
  const cancelButtonRef = useRef(null)
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    verify_code: ''
  })
  const [processing, setProcessing] = useState(false)
  const [validate, setValidate] = useState(false)
  const [open, setOpen] = useState(false)
  const verifyCodeRef = useRef(null)
  const randomIntSet = () => [Math.floor(Math.random() * 7 + 1), Math.floor(Math.random() * 7 + 1)]
  const [verifySet, setVerifySet] = useState([1, 1])
  useEffect(() => {
    setVerifySet(randomIntSet())
  }, [])
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
      setDoc(doc(getFirestore(), 'responses', now.toFormat('yyyy-MM-dd hh:mm:ss a')), {
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
      })
        .then(() => {
          setOpen(true)
          setValidate(false)
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
      setValidate(true)
    }
  }
  return (
    <>
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-20 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
          initialFocus={cancelButtonRef}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-32 text-center sm:block sm:p-0">
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
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-8 mt-8 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-500">Success!</h3>
                  <p className="mt-2 text-lg sm:text-xl !leading-relaxed text-gray-500">
                    The email has been sent. I will usually respond within the week unless I am
                    taking a significant break.
                  </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <button
                    type="button"
                    ref={cancelButtonRef}
                    onClick={() => setOpen(false)}
                    className="border border-gray-300 bg-white transition-colors hover:bg-gray-100 duration-200 h-14 w-14 flex items-center justify-center rounded-full focus:outline-none"
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
