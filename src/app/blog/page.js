const posts = [
  {
    id: 1,
    title: "Comprehensive Communication",
    href: "#",
    description:
      " With integrated communication tools, SchoolFlow ensures that information flows smoothly between administrators, teachers, students, and parents. Instant notifications, announcements, and messaging keep everyone connected and informed.",
  },
  // More posts...
  {
    id: 2,
    title: "Effortless Administrative Tasks",
    href: "#",
    description:
      "SchoolFlow simplifies complex administrative processes such as student enrollment, attendance tracking, scheduling, and report generation. This frees up valuable time for educators to focus on teaching and students to focus on learning.",
  },
  {
    id: 3,
    title: "Data-Driven Insights",
    href: "#",
    description:
      "School administrators gain valuable insights through data analytics, helping them make informed decisions about curriculum enhancements, resource allocation, and strategic planning.",
  },
];

export default function Blog() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            What is SchoolFLow?
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Manage your data effectively.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='max-w-xl flex-col items-start justify-between'
            >
              <div className='flex items-center gap-x-4 text-xs'></div>
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-9 text-gray-900 group-hover:text-gray-600'>
                  <a href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </a>
                </h3>
                <p className='mt-5  text-sm leading-6 text-gray-600'>
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
