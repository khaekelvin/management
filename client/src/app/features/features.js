import { FaRegAddressCard } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";

const features = [
  {
    name: "Student Profile Management:.",
    description:
      "The Student Information Management feature of our school management system ensures that all student-related data is centralized, organized, and easily accessible to authorized users.",
  },
  {
    name: "Document and File Management:",
    description:
      "This feature enables the secure storage and organization of important student-related documents and files. It should support the uploading and storage of documents such as medical records, consent forms, transcripts, and other important paperwork.",
  },
];

const featureses = [
  {
    name: "Performance Analytics and Progress Tracking: ",
    description:
      "This feature allows educators, students, and parents to monitor a student's academic progress over time. It should provide comprehensive performance analytics.",
  },
  {
    name: "Real-Time Gradebook:",
    description:
      " Implement a real-time digital gradebook that allows teachers to input grades instantly as assignments and assessments are completed. This ensures that students, parents, and teachers have up-to-date information on academic performance. ",
  },
];

export default function Features() {
  return (
    <div className='overflow-hidden bg-white py-25 sm:py-25 flex mx-auto flex-wrap max-w-[350px] lg:max-w-[1136px]'>
      <div className=''>
        <div className='  gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none '>
          <div className='lg:pr-20 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p className=' text-lg font-bold tracking-tight text-gray-900 sm:text-3xl '>
                Student Information Management
              </p>

              <dl className='mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <FaRegAddressCard
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

      <div className=''>
        <div className='mx-auto  max-w-2xl gap-100  gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4 flex flex-wrap'>
            <div className='lg:max-w-lg'>
              <p className='mt-5 lg:mt-0 text-lg font-bold tracking-tight text-gray-900 sm:text-3xl'>
                Grade and Progress Tracking
              </p>

              <dl className='mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {featureses.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <FaRegAddressBook
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
