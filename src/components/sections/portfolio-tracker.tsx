"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import Image from 'next/image'

const portfolioData = [
  { name: 'Apple Inc. (AAPL)', value: 41.0, color: '#A6B1B7' },
  { name: 'Bank of America (BAC)', value: 10.0, color: '#0072C6' },
  { name: 'American Express (AXP)', value: 9.1, color: '#2E77BC' },
  { name: 'Coca-Cola (KO)', value: 7.2, color: '#F40009' },
  { name: 'Chevron (CVX)', value: 5.9, color: '#00AEEF' },
  { name: 'Occidental Petroleum (OXY)', value: 4.6, color: '#002D62' },
  { name: 'Kraft Heinz (KHC)', value: 3.5, color: '#C8102E' },
  { name: 'Other', value: 18.7, color: '#808080' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-md bg-background/80 backdrop-blur-sm shadow-lg">
        <p className="font-bold">{`${payload[0].name}`}</p>
        <p className="text-primary">{`Portfolio Weight: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}


export function PortfolioTracker() {
  return (
    <section id="tracker" className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2 text-glow">
          Berkshire Hathaway Portfolio
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          A snapshot of the top public holdings. Data as of early 2024.
        </p>
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="w-full h-80">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={portfolioData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {portfolioData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend iconSize={10} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-headline text-xl">Top Holdings</h3>
                        <ul className="space-y-2">
                            {portfolioData.filter(p => p.name !== "Other").slice(0, 5).map(item => (
                                <li key={item.name} className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5">
                                    <span className="font-medium">{item.name}</span>
                                    <span className="font-bold text-primary">{item.value}%</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  )
}
