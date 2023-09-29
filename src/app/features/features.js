import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "The Student Information Management feature of our school management system ensures that all student-related data is centralized, organized, and easily accessible to authorized users.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "This feature serves as the foundation for various administrative and academic processes, enabling streamlined operations and enhanced communication.",
    icon: LockClosedIcon,
  },
];

const featureses = [
  {
    name: "Push to deploy.",
    description:
      "The Grade and Progress Tracking feature in your school management system empowers educators and administrators to manage grading, track student progress, and provide valuable insights into academic achievements.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "This feature serves as the foundation for various administrative and academic processes, enabling streamlined operations and enhanced communication.",
    icon: LockClosedIcon,
  },
];
// mx-auto max-w-7xl px-6 lg:px-8
export default function Features() {
  return (
    <div className='overflow-hidden bg-white py-25 sm:py-25 flex mx-auto'>
      <div className=''>
        <div className='mx-auto  max-w-2xl  gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none '>
          <div className='lg:pr-20 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-3xl'>
                Student Information Management
              </p>

              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* mx-auto max-w-7xl px-6 lg:px-8 */}
      <div className=''>
        <div className='mx-auto  max-w-2xl gap-100  gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4 flex flex-wrap'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                Grade and Progress Tracking
              </p>

              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {featureses.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
