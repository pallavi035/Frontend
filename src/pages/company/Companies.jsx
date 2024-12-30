import React from 'react';


const Companies = () => {
  return (
    <div>
      

      {/* Section 1 */}
      <section className="bg-white p-15 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            {/* Image Section */}
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="Company Collaboration"
            />

            {/* Content Section */}
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-green-500">“</p>
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                Discover the Best Talent for Your Company
              </h1>
              <p className="max-w-lg mt-6 text-gray-600 dark:text-gray-400">
                Our job portal is the perfect place for companies to connect with skilled professionals. Post jobs, review applications, and grow your team with ease.
              </p>
              <h3 className="mt-6 text-lg font-medium text-green-500">James Carter</h3>
              <p className="text-gray-600 dark:text-gray-300">HR Director at NextGen Corp</p>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 lg:justify-start">
                {/* Left Arrow */}
                <button
                  title="Previous"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  title="Next"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Why Companies <span className="text-blue-500">Trust Us</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600 dark:text-gray-300">
            See what industry leaders are saying about the value we bring to hiring processes and team development.
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-600 dark:text-gray-300">
                “The platform has simplified our hiring process, allowing us to reach top-tier candidates quickly and efficiently. A must-have tool for HR professionals.”
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                  alt="Testimonial Author"
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">Robbert Williams</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultancy</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-600 dark:text-gray-300">
                “We’ve significantly reduced our hiring time by leveraging this job portal. It connects us with the right talent efficiently and professionally.”
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt="Testimonial Author"
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
