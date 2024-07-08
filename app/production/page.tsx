/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hCWT1mmcspW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect, SetStateAction } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

interface OilData {
    country: string;
    production: number;
    // Add other properties as per your actual data structure
  }
  
  interface GasData {
    country: string;
    production: number;
    // Add other properties as per your actual data structure
  }
  
export default function Component() {
    const [selectedCountry, setSelectedCountry] = useState<string>("");
  
    // Dummy data for oil and gas
    const oilData: OilData[] = [
      { country: "USA", production: 150 },
      { country: "Canada", production: 100 },
      { country: "Russia", production: 200 },
      // Add more dummy data as needed
    ];
  
    const gasData: GasData[] = [
      { country: "USA", production: 500 },
      { country: "Canada", production: 300 },
      { country: "Russia", production: 400 },
      // Add more dummy data as needed
    ];
  
    const handleCountryChange = (value: string) => {
      setSelectedCountry(value);
    };
    const filteredOilData = selectedCountry ? oilData.filter((item) => item.country === selectedCountry) : oilData;
    const filteredGasData = selectedCountry ? gasData.filter((item) => item.country === selectedCountry) : gasData;

  
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-muted/40">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="">Oil & Gas Dashboard</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                prefetch={false}
              >
                <BarChartIcon className="h-4 w-4" />
                Production
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <PieChartIcon className="h-4 w-4" />
                Reserves
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <LandmarkIcon className="h-4 w-4" />
                Exports
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Companies
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Oil Production</CardDescription>
                  <CardTitle>
                    {filteredOilData.reduce((total, item) => total + item?.production, 0).toFixed(2)} million barrels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LinechartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Gas Production</CardDescription>
                  <CardTitle>
                    {filteredGasData.reduce((total, item) => total + item?.production, 0).toFixed(2)} billion cubic feet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LinechartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Key Metrics</CardDescription>
                  <CardTitle>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span>Oil Reserves:</span>
                        <span>250 billion barrels</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Gas Reserves:</span>
                        <span>1,200 trillion cubic feet</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Exports:</span>
                        <span>$150 billion</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Top Producing Countries</CardDescription>
                  <CardTitle>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span>1. United States</span>
                        <span>15 million barrels/day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>2. Saudi Arabia</span>
                        <span>12 million barrels/day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>3. Russia</span>
                        <span>11 million barrels/day</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Top Exporting Countries</CardDescription>
                  <CardTitle>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span>1. Saudi Arabia</span>
                        <span>$50 billion</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>2. Russia</span>
                        <span>$40 billion</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>3. United States</span>
                        <span>$35 billion</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Chat with AI</CardDescription>
                  <CardTitle>Get insights on the data</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>OA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-bold">Oil & Gas AI</div>
                        <div className="prose text-muted-foreground">
                          <p>
                            Hello! I'm an AI assistant here to help you analyze the oil and gas production data. How can
                            I assist you today?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-bold">You</div>
                        <div className="prose text-muted-foreground">
                          <p>
                            Can you provide some insights on the top producing and exporting countries based on the
                            data?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>OA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-bold">Oil & Gas AI</div>
                        <div className="prose text-muted-foreground">
                          <p>
                            Based on the data, the top producing countries are the United States, Saudi Arabia, and
                            Russia. The top exporting countries are Saudi Arabia, Russia, and the United States. The US
                            and Saudi Arabia are the dominant players in both production and exports, while Russia has a
                            significant presence in both as well.
                          </p>
                          <p>
                            Some key insights: - The US has been able to increase its oil and gas production
                            significantly in recent years due to advancements in shale extraction technology. - Saudi
                            Arabia remains a major global player, with its state-owned oil company Aramco being one of
                            the largest producers and exporters. - Russia's production and exports have been impacted by
                            geopolitical factors and sanctions, but it still maintains a strong position.
                          </p>
                          <p>
                            Let me know if you have any other questions! I'm happy to provide more detailed analysis.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>YO</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-bold">You</div>
                        <div className="prose text-muted-foreground">
                          <p>
                            That's very helpful, thank you. Can you also provide some insights on the trends in oil and
                            gas production over time?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-6 h-6 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>OA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-bold">Oil & Gas AI</div>
                        <div className="prose text-muted-foreground">
                          <p>Absolutely, let me take a look at the production trends over time:</p>
                          <p>
                            For oil production, we can see a steady increase over the past decade, with a few dips due
                            to factors like the COVID-19 pandemic and geopolitical events. The US, Saudi Arabia, and
                            Russia have all been able to increase their production, with the US seeing the most
                            significant growth thanks to shale oil.
                          </p>
                          <p>
                            For natural gas, the trend is also generally upward, with the US leading the way in
                            production increases. Countries like Russia, Iran, and Qatar have also seen notable growth
                            in gas production over time.
                          </p>
                          <p>
                            One key trend to note is the increasing focus on renewable energy sources and the potential
                            impact that could have on future oil and gas demand and production. But for now, these
                            fossil fuels remain critical components of the global energy mix.
                          </p>
                          <p>Let me know if you need any clarification or have additional questions!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <ShareIcon className="h-4 w-4 mr-2" />
              Share Dashboard
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

function BarChartIcon(props:any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BellIcon(props:any) {
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


function DownloadIcon(props:any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function HomeIcon(props:any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LandmarkIcon(props:any) {
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
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}


function LinechartChart(props:any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PieChartIcon(props:any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}


function ShareIcon(props:any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function UsersIcon(props:any) {
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