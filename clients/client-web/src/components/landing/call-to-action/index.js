/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
      <div className="bg-gradient-to-l opacity-90 from-gray-900 to-blue-900 rounded-2xl">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using Workflow today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
  )
}