"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const CompoundInterestCalculator = () => {
  const [initial, setInitial] = useState(1000)
  const [monthly, setMonthly] = useState(100)
  const [rate, setRate] = useState(8)
  const [years, setYears] = useState(20)

  const finalAmount = useMemo(() => {
    let total = initial
    for (let i = 0; i < years; i++) {
      total = (total + monthly * 12) * (1 + rate / 100)
    }
    return total
  }, [initial, monthly, rate, years])

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">The Magic of Growing Money</CardTitle>
        <CardDescription>See how compound interest works wonders over time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            <div className='space-y-2'>
                <Label>Starting Amount: ${initial.toLocaleString()}</Label>
                <Slider defaultValue={[1000]} min={0} max={10000} step={100} onValueChange={(v) => setInitial(v[0])} />
            </div>
            <div className='space-y-2'>
                <Label>Monthly Savings: ${monthly.toLocaleString()}</Label>
                <Slider defaultValue={[100]} min={0} max={1000} step={10} onValueChange={(v) => setMonthly(v[0])} />
            </div>
            <div className='space-y-2'>
                <Label>Annual Interest Rate: {rate}%</Label>
                <Slider defaultValue={[8]} min={1} max={20} step={1} onValueChange={(v) => setRate(v[0])} />
            </div>
            <div className='space-y-2'>
                <Label>Time Period: {years} years</Label>
                <Slider defaultValue={[20]} min={1} max={50} step={1} onValueChange={(v) => setYears(v[0])} />
            </div>
        </div>
        <div className="text-center bg-primary/10 p-6 rounded-lg">
            <p className="text-lg text-muted-foreground">In {years} years, you would have:</p>
            <p className="text-4xl font-bold font-headline text-primary text-glow">
                ${finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
        </div>
      </CardContent>
    </Card>
  )
}


export function InteractiveTools() {
  return (
    <section id="tools" className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2 text-glow">
          Interactive Tools
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Play with numbers and concepts to make learning stick.
        </p>
        <div className="grid lg:grid-cols-1 gap-8">
            <CompoundInterestCalculator />
        </div>
      </div>
    </section>
  )
}
