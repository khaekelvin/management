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
                  width="32"/>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end ">
              <div className="lg:hidden flex flex-col">
            <DropdownMenuItem><Link href="/dashboard">School</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/students">students</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#">Attendance</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#">Grades</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#">Reports</Link></DropdownMenuItem>              
              <DropdownMenuSeparator />
              </div>
              <DropdownMenuItem><LogoutButton/></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="hidden h-full border-r px-4 py-6 md:flex md:flex-col md:gap-4">
        <Link
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 dark:bg-gray-800"
            href="#"
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
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <CalendarIcon className="h-5 w-5" />
            Attendance
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <BookIcon className="h-5 w-5" />
            Grades
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <FileIcon className="h-5 w-5" />
            Reports
          </Link>

          <DropdownMenuSeparator />
          <LogoutButton/>
          
        </div>
        <main className="flex-1 p-6">
        <h2 className="flex text-3xl mb-4"><p>Welcome,</p>{user.name}</h2>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+5% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+2% from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
                  <BookIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.7</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+0.1 from last year</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Graduation Rate</CardTitle>
                  <GraduationCapIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+2% from last year</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Overview</CardTitle>
                  <CardDescription>Attendance rates for the current school year.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[9/4]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Grade distribution for the current school year.</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[9/4]" />
                </CardContent>
              </Card>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead className="text-right">GPA</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Kwame Mensah</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>95%</TableCell>
                    <TableCell className="text-right">4.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Kelvin Duobu</TableCell>
                    <TableCell>B+</TableCell>
                    <TableCell>92%</TableCell>
                    <TableCell className="text-right">3.8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Yeboah</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell className="text-right">3.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Emily Adjei</TableCell>
                    <TableCell>A-</TableCell>
                    <TableCell>90%</TableCell>
                    <TableCell className="text-right">3.9</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">David Agbenu</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>88%</TableCell>
                    <TableCell className="text-right">3.5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
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