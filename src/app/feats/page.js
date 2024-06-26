"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import imageUrl from "../images/dashb.jpg";

export default function Feats() {
  return (
    <div>
      <Header />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className=" font-semibold leading-7 text-indigo-600 text-2xl ">
                  School<span className="text-amber-500">Flow</span>
                </p>
                <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Better Management System
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Experience a new era of school administration with SchoolFlow.
                  We're dedicated to providing you with a comprehensive,
                  user-friendly, and efficient solution that makes managing your
                  educational institution a breeze.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[60rem]"
              src="https://res.cloudinary.com/dvfmse8he/image/upload/v1717087280/Screenshot_2024-05-30_at_4.40.15_PM_ta0li0.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="text-2xl font-bold to-black">Key Benefits</h1>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Streamlined Operations:
                      </strong>{" "}
                      Say goodbye to paperwork and administrative headaches. Our
                      system automates tasks like attendance tracking, grade
                      management, and scheduling, freeing up valuable time for
                      educators.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Security and Privacy:
                      </strong>{" "}
                      Your school's data is of paramount importance. We've
                      implemented robust security measures to protect sensitive
                      information and ensure compliance with data privacy
                      regulations.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Data-Driven Insights:
                      </strong>{" "}
                      Make informed decisions with access to insightful data and
                      analytics. Monitor student performance, track trends, and
                      identify areas for improvement.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Ready to experience the benefits of a better management
                  system? Contact our team today to schedule a demo or learn
                  more about how SchoolFlow can transform your school's
                  administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
