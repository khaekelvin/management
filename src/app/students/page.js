"use client";
import Link from "next/link"
import { Button } from "../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "../components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card, CardDescription, CardFooter } from "../components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
import Logo from "../components/Logo";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/page";



export default function Component() {
  const { user, isAuthenticated, isLoading } = useAuth0();
const studentData = [
    { name: "Kwame Mensah", grade: "A", attendance: "95%", absences: 3, tardies: 1 },
    { name: "Kelvin Daba", grade: "B+", attendance: "92%", absences: 4, tardies: 2 },
    { name: "Michael Johnson", grade: "C", attendance: "85%", absences: 6, tardies: 4 },
    { name: "Omo Yeboah", grade: "A-", attendance: "97%", absences: 1, tardies: 0 },
    { name: "Emily Adjei", grade: "B", attendance: "90%", absences: 5, tardies: 3 },
    { name: "David Agbenu", grade: "A+", attendance: "100%", absences: 0, tardies: 0 },
    { name: "Osborn Gbekwe", grade: "B+", attendance: "100%", absences: 0, tardies: 0 },
    { name: "Sarah Lebe", grade: "C", attendance: "100%", absences: 0, tardies: 0 },
    { name: "Yanis Obi", grade: "A", attendance: "100%", absences: 0, tardies: 0 },
    { name: "Peter Kim", grade: "D", attendance: "100%", absences: 0, tardies: 0 },
    
];

return (
    isAuthenticated && (
        <div className="flex min-h-screen w-full flex-col">      
      <header className="flex h-16 shrink-0 items-center border-b px-4 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="/dashboard">
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
            <DropdownMenuContent align="end">
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
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 "
            href="/dashboard"
          >
            <SchoolIcon className="h-5 w-5" />
            School
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 dark:bg-gray-800"
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
        <section>
                <div>
                    <div className="flex flex-col px-3 mt-7 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Student Information</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Access and manage all the details about your students in one place.
                            </p>
                        </div>
                        <div className="grid w-full  gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {studentData.map((student, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{student.name}</CardTitle>
                                        <CardDescription>Grade: {student.grade}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-2">
                                            <div className="flex items-center justify-between">
                                                <span>Attendance:</span>
                                                <span className="font-medium">{student.attendance}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Absences:</span>
                                                <span className="font-medium">{student.absences}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Tardies:</span>
                                                <span className="font-medium">{student.tardies}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button size="sm" className="">View Details</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
    )
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