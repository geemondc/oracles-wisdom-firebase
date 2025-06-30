"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'

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

const quizQuestions = [
    {
        question: "A company has a famous brand name that everyone loves and trusts. Does this sound like a company with a strong 'Economic Moat'?",
        options: ["Yes, a strong brand is a great moat.", "No, brand names don't matter."],
        answer: "Yes, a strong brand is a great moat.",
        explanation: "Correct! A powerful brand, like Coca-Cola's, is a classic example of an economic moat because it makes it very hard for competitors to take away customers."
    },
    {
        question: "You find a great company, but its stock price seems very expensive compared to its earnings. Should you buy it, according to the 'Margin of Safety' principle?",
        options: ["Yes, great companies are always worth it.", "No, you should wait for a better price."],
        answer: "No, you should wait for a better price.",
        explanation: "Excellent! The margin of safety principle teaches us to buy wonderful businesses only when they are trading at a fair or cheap price. This protects us if our analysis is a bit wrong."
    },
]

const InvestmentQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)

    const handleSubmit = () => {
        if (!selectedAnswer) return
        if (selectedAnswer === quizQuestions[currentQuestion].answer) {
            setResult('correct')
        } else {
            setResult('incorrect')
        }
    }

    const handleNext = () => {
        setResult(null)
        setSelectedAnswer(null)
        setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length)
    }

    const q = quizQuestions[currentQuestion]

    return (
        <Card className="w-full bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">What Would Buffett Do?</CardTitle>
                <CardDescription>Test your investment knowledge with this quick quiz.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg font-semibold">{q.question}</p>
                <RadioGroup onValueChange={setSelectedAnswer} value={selectedAnswer || ""} disabled={!!result}>
                    {q.options.map(opt => (
                        <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={opt} />
                            <Label htmlFor={opt}>{opt}</Label>
                        </div>
                    ))}
                </RadioGroup>
                
                {result ? (
                    <div className='space-y-4'>
                        <Alert variant={result === 'correct' ? 'default' : 'destructive'} className={result === 'correct' ? 'border-green-500/50 bg-green-500/10' : ''}>
                            {result === 'correct' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                            <AlertTitle>{result === 'correct' ? 'Correct!' : 'Not Quite!'}</AlertTitle>
                            <AlertDescription>
                                {q.explanation}
                            </AlertDescription>
                        </Alert>
                        <Button onClick={handleNext} className='w-full'>Next Question</Button>
                    </div>
                ) : (
                    <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full">Check Answer</Button>
                )}
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
            <InvestmentQuiz />
        </div>
      </div>
    </section>
  )
}
