import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { subComponent } from 'impulse-utils'

export default function ModalItem(props) {
  const cancelButtonRef = useRef(null)
  const [open, setOpen] = useState(false)
  const _template = {
    title: subComponent.select(props.children, 'Title'),
    preview: subComponent.select(props.children, 'Preview'),
    stack: subComponent.select(props.children, 'Stack'),
    content: subComponent.select(props.children, 'Content')
  }
  return (
    <>
      <li>
        <button
          className="w-full rounded-md border border-gray-100 py-3 px-5 text-left shadow-md transition-colors duration-300 hover:bg-gray-100"
          type="button"
          onClick={() => setOpen(true)}
        >
          <span className="text-base font-bold text-gray-600 sm:text-lg">
            {_template.title}
          </span>
          <p className="shave-3 h-[4.5rem] overflow-hidden text-base text-gray-500 sm:h-[5.25rem] sm:text-lg">
            {_template.preview}
          </p>
        </button>
      </li>
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
                <div className="mt-8 mb-4 bg-white px-8 text-gray-600">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {props.href ? (
                      <a
                        className="flex items-center gap-2"
                        href={props.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {_template.title}
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      </a>
                    ) : (
                      _template.title
                    )}
                  </h3>
                  <div className="mt-4 mb-3">{_template.stack}</div>
                  <p className="leading-relaxed">{_template.content}</p>
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

ModalItem.Title = subComponent.create('Title')
ModalItem.Preview = subComponent.create('Preview')
ModalItem.Stack = subComponent.create('Stack')
ModalItem.Content = subComponent.create('Content')
