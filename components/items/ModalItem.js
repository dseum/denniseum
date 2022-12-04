import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { subComponent } from 'impulse-utils'

export default function ModalItem(props) {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const _template = {
    title: subComponent.select(props.children, 'Title'),
    preview: subComponent.select(props.children, 'Preview'),
    stack: subComponent.select(props.children, 'Stack'),
    content: subComponent.select(props.children, 'Content'),
  }
  return (
    <>
      <li>
        <button
          className="border border-gray-100 shadow-md p-3 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-300 text-left"
          type="button"
          onClick={() => setOpen(true)}
        >
          <span className="text-gray-500 text-base sm:text-lg font-bold">
            {_template.title}
          </span>
          <p className="text-gray-400 text-base sm:text-lg">
            {_template.preview}
          </p>
        </button>
      </li>
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-8 mt-8 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-500">
                    {props.href ? (
                      <a
                        className="flex items-center gap-1"
                        href={props.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {_template.title}
                        <ArrowTopRightOnSquareIcon className="h-8 w-8" />
                      </a>
                    ) : (
                      _template.title
                    )}
                  </h3>
                  <div className="text-gray-500 mt-4 mb-3">
                    {_template.stack}
                  </div>
                  <p className="text-lg sm:text-xl !leading-relaxed text-gray-500">
                    {_template.content}
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

ModalItem.Title = subComponent.create('Title')
ModalItem.Preview = subComponent.create('Preview')
ModalItem.Stack = subComponent.create('Stack')
ModalItem.Content = subComponent.create('Content')
