import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-gray-100 dark:bg-gray-800 p-6 flex items-center gap-6">
        <Avatar className="w-20 h-20">
          <img src="/placeholder.svg" alt="Student Photo" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <h2 className="text-xl font-bold">John Smith</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Grade 11 | GPA: 3.8
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          John is a hardworking and dedicated student who excels in both
          academics and extracurricular activities. He is passionate about
          science and hopes to pursue a career in engineering.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">3.8</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Grade Point Average
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">11</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Grade Level
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              AP Classes Taken
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">2</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Extracurricular Activities
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">1450</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              SAT Score
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">35</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              ACT Score
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
