/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ylKasIsRPrK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { CartesianGrid, XAxis, Area, AreaChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-background border-b px-4 md:px-6 flex items-center h-16 shrink-0">
        <h1 className="text-xl font-bold">Oil & Gas Production Dashboard</h1>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:p-8">
        <Tabs defaultValue="oil">
          <TabsList>
            <TabsTrigger value="oil">Oil Production</TabsTrigger>
            <TabsTrigger value="gas">Gas Production</TabsTrigger>
          </TabsList>
          <TabsContent value="oil">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>World Oil Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AreachartChart className="aspect-[16/9]" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Oil Producing Countries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LinechartChart className="aspect-[16/9]" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Oil Production Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Country</TableHead>
                          <TableHead>Production (bbl/day)</TableHead>
                          <TableHead>Reserves (bbl)</TableHead>
                          <TableHead>Exports (bbl/day)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>United States</TableCell>
                          <TableCell>18,400,000</TableCell>
                          <TableCell>39,230,000,000</TableCell>
                          <TableCell>2,900,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Saudi Arabia</TableCell>
                          <TableCell>11,600,000</TableCell>
                          <TableCell>266,260,000,000</TableCell>
                          <TableCell>7,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Russia</TableCell>
                          <TableCell>10,500,000</TableCell>
                          <TableCell>107,300,000,000</TableCell>
                          <TableCell>5,100,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Canada</TableCell>
                          <TableCell>4,900,000</TableCell>
                          <TableCell>167,800,000,000</TableCell>
                          <TableCell>3,800,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Iraq</TableCell>
                          <TableCell>4,700,000</TableCell>
                          <TableCell>143,100,000,000</TableCell>
                          <TableCell>3,800,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gas">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>World Gas Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AreachartChart className="aspect-[16/9]" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Gas Producing Countries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LinechartChart className="aspect-[16/9]" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Gas Production Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Country</TableHead>
                          <TableHead>Production (mcf/day)</TableHead>
                          <TableHead>Reserves (mcf)</TableHead>
                          <TableHead>Exports (mcf/day)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>United States</TableCell>
                          <TableCell>92,000,000</TableCell>
                          <TableCell>464,300,000,000</TableCell>
                          <TableCell>7,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Russia</TableCell>
                          <TableCell>68,000,000</TableCell>
                          <TableCell>1,688,700,000,000</TableCell>
                          <TableCell>16,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Iran</TableCell>
                          <TableCell>24,000,000</TableCell>
                          <TableCell>1,201,000,000,000</TableCell>
                          <TableCell>6,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Canada</TableCell>
                          <TableCell>16,000,000</TableCell>
                          <TableCell>71,000,000,000</TableCell>
                          <TableCell>5,000,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Qatar</TableCell>
                          <TableCell>15,000,000</TableCell>
                          <TableCell>872,800,000,000</TableCell>
                          <TableCell>10,000,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <div className="fixed bottom-4 right-4 w-80 md:w-96">
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-80 gap-4 overflow-y-auto">
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                  <BotIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="bg-muted rounded-lg p-4 max-w-[70%]">
                  <p>Hello! How can I assist you with analyzing the oil and gas production data?</p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-primary rounded-lg p-4 max-w-[70%] text-primary-foreground">
                  <p>Can you provide some insights on the top producing countries and any notable trends?</p>
                </div>
                <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                  <BotIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="bg-muted rounded-lg p-4 max-w-[70%]">
                  <p>
                    Based on the data, the top oil producing countries are the United States, Saudi Arabia, and Russia.
                    The US has the highest daily production, but Saudi Arabia has the largest reserves. Russia is a
                    major exporter of oil.
                  </p>
                  <p>
                    For gas production, the top producers are the US, Russia, and Iran. Russia has the largest gas
                    reserves, followed by Iran and the US. Canada and Qatar are also significant gas exporters.
                  </p>
                  <p>
                    Overall, I'm seeing steady production growth in most countries, with some fluctuations due to market
                    conditions and geopolitical factors. Let me know if you need any other insights!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AreachartChart(props:any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
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
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}


function BotIcon(props:any) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}