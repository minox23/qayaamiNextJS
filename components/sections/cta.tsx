export default function CTA(): JSX.Element {
    return (
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl sm:px-6 sm:pt-5 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-950 px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transform your business today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
              commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white hover:translate-x-3 transition-all duration-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }