"use client";
import Link from "next/link"
import { Button } from "../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "../components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "../components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
import Logo from "../components/Logo";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar"


export default function Component() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    isAuthenticated && (
      <div className="flex min-h-screen w-full flex-col">
        <header className="flex h-16 shrink-0 items-center border-b px-4 md:px-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <Logo className="" size={2} />
            <span className="sr-only">Acme School</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <img src={user.picture} alt={user.name}
                    className="rounded-full"
                    height="32"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end ">
                <div className="lg:hidden flex flex-col">
                  <DropdownMenuItem><Link href="/dashboard">School</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="/students">Students</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="#">Courses</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="/reports">Reports</Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                </div>
                <DropdownMenuItem><LogoutButton /></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1">
          <div className="hidden h-full border-r px-4 py-6 md:flex md:flex-col md:gap-4">
            <Link
              className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/dashboard"
            >
              <SchoolIcon className="h-5 w-5" />
              School
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/students"
            >
              <UsersIcon className="h-5 w-5" />
              Students
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 dark:bg-gray-800"
              href="#"
            >
              <BookIcon className="h-5 w-5" />
              Courses
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/reports"
            >
              <FileIcon className="h-5 w-5" />
              Reports
            </Link>

            <DropdownMenuSeparator />
            <LogoutButton />

          </div>

          <main className="flex flex-1 flex-col gap-4 px-2 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Courses</h1>

            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>
                <CardContent className="grid gap-4">

                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg pt-4">Introduction to Computer Science</h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Explore the fundamental concepts of computer science, including algorithms, data structures, and
                      programming languages.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <UsersIcon className="h-4 w-4" />
                        <span>350 students</span>
                      </div>

                      <Dialog>
                        <DialogTrigger><Button size="sm" variant="outline">
                          View Course
                        </Button></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Introduction to Computer Science</DialogTitle>
                            <DialogDescription>
                              <p className="text-black font-bold my-1">Course Overview</p>
                              "Introduction to Computer Science" is a foundational course designed for beginners to learn core computer science concepts and programming skills.

                              <h1 className="text-black font-bold my-1">Learning Objectives</h1>
                              <div className="text-left px-2 mx-auto w-80">
                              <li>Understand fundamental computer science concepts.</li>
                              <li>Develop programming skills in Python.</li>
                              <li>Apply computational thinking for problem-solving.</li>
                              <li>Explore applications of computer science in various fields.</li>
                              <li>Collaborate effectively on software projects.</li>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-4">

                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg pt-4">Data Structures and Algorithms</h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Learn how to design and analyze efficient algorithms and data structures to solve complex problems.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <UsersIcon className="h-4 w-4" />
                        <span>300 students</span>
                      </div>
                      <Dialog>
                        <DialogTrigger><Button size="sm" variant="outline">
                          View Course
                        </Button></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Data Structures and Algorithms</DialogTitle>
                            <DialogDescription>
                              <p className="text-black font-bold my-1">Course Overview</p>
                              "Data Structures and Algorithms" is an intermediate-level course that builds on foundational programming knowledge to explore essential data structures and algorithms.

                              <h1 className="text-black font-bold my-1">Learning Objectives</h1>
                              <div className="text-left px-2 mx-auto w-80">
                              <li>Understand and implement core data structures.</li>
                              <li>Analyze and apply various algorithms.</li>
                              <li>Evaluate algorithm efficiency using Big O notation.</li>
                              <li>Solve complex problems using appropriate algorithms.</li>
                              <li>Develop skills for optimizing and debugging code.</li>
</div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-4">

                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg pt-4">Web Development Fundamentals</h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Dive into the world of web development, covering HTML, CSS, JavaScript, and modern web frameworks.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <UsersIcon className="h-4 w-4" />
                        <span>250 students</span>
                      </div>
                      <Dialog>
                        <DialogTrigger><Button size="sm" variant="outline">
                          View Course
                        </Button></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Web Development Fundamentals</DialogTitle>
                            <DialogDescription>
                              <p className="text-black font-bold my-1">Course Overview</p>
                              "Web Development Fundamentals" is an introductory course designed to teach students the essential skills and technologies needed to build modern, responsive websites and web applications.

                              <h1 className="text-black font-bold my-1">Learning Objectives</h1>
                              <div className="text-left px-2 mx-auto w-80">
                              <li>Understand the basics of web development and the structure of web applications.</li>
                              <li>Create web pages using HTML for content, CSS for styling, and JavaScript for interactivity.</li>
                              <li>Develop responsive web designs that work on various devices.</li>
                              <li>Learn about web development tools and frameworks.</li>
                              <li>Deploy and maintain web applications.</li>
</div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-4">

                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg pt-4">Mobile App Development</h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                      Learn how to build cross-platform mobile applications using frameworks like React Native and
                      Flutter.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <UsersIcon className="h-4 w-4" />
                        <span>334 students</span>
                      </div>
                      <Dialog>
                        <DialogTrigger><Button size="sm" variant="outline">
                          View Course
                        </Button></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Mobile App Development</DialogTitle>
                            <DialogDescription>
                              <p className="text-black font-bold my-1">Course Overview</p>
                              "Mobile App Development" is an introductory course designed to teach students the essential skills and technologies needed to create mobile applications for iOS and Android platforms.

                              <h1 className="text-black font-bold my-1">Learning Objectives</h1>
                              <div className="text-left px-2 mx-auto w-80">
                              <li>Understand the fundamentals of mobile app development.</li>
                              <li>Develop mobile applications for iOS and Android platforms.</li>
                              <li>Learn to use development frameworks and tools.</li>
                              <li>Learn about web development tools and frameworks.</li>
                              <li>Deploy and maintain mobile applications.</li>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Students</h1>
              <Button className="ml-auto" size="sm">
                Add Student
              </Button>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="Student Avatar" src="/placeholder-user.jpg" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>John Doe</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Introduction to Computer Science</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Data Structures and Algorithms</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                            <div className="bg-primary rounded-full h-2.5 w-[80%]" />
                          </div>
                          <span>80%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                            <div className="bg-primary rounded-full h-2.5 w-[60%]" />
                          </div>
                          <span>60%</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="Student Avatar" src="/placeholder-user.jpg" />
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>Sarah Miller</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Web Development Fundamentals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Mobile App Development</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                            <div className="bg-primary rounded-full h-2.5 w-[90%]" />
                          </div>
                          <span>90%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                            <div className="bg-primary rounded-full h-2.5 w-[75%]" />
                          </div>
                          <span>75%</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="Student Avatar" src="/placeholder-user.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>Jessica Davis</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Introduction to Computer Science</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Data Structures and Algorithms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookIcon className="h-4 w-4" />
                          <span>Web Development Fundamentals</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-2" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    )
  )
}



function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}



function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}



function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}




function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}




function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}