
"use client";
import Link from "next/link"
import { Button } from "../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "../components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "../components/ui/card"
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
              <DropdownMenuItem><Link href="/students">Students</Link></DropdownMenuItem>        
              <DropdownMenuItem><Link href="/courses">Courses</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/reports">Reports</Link></DropdownMenuItem>              
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
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="/courses"
          >
            <BookIcon className="h-5 w-5" />
            Courses
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium  bg-gray-100 dark:bg-gray-800"
            href="/reports"
          >
            <FileIcon className="h-5 w-5" />
            Reports
          </Link>

          <DropdownMenuSeparator />
          <LogoutButton/>
          
        </div>
        <main className="container mx-auto px-3 md:px-6 py-8">
      <div className="">
        <div>
          <h1 className="text-2xl font-bold md:text-4xl">School Performance Report</h1>
          <p className="text-gray-500 dark:text-gray-400 w-[20rem] md:w-[30rem]">Overview of key metrics and student performance data.</p>
        </div>
        <div className="grid md:grid md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Students</CardTitle>
              <UsersIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Teachers</CardTitle>
              <UsersIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">78</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Classes</CardTitle>
              <BookOpenIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">52</div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Student Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Student</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Behavior</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>95%</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>B+</TableCell>
                    <TableCell>92%</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Johnson</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell>Average</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Emily Davis</TableCell>
                    <TableCell>A-</TableCell>
                    <TableCell>98%</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">David Wilson</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>90%</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-5 h-5" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>     </div>
    </div>
  )
)
}

function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
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