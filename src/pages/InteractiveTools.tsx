import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import toolsImg from "@/assets/tools-illustration.png";

function IntrinsicValueCalc() {
  const [earnings, setEarnings] = useState("");
  const [growth, setGrowth] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const e = parseFloat(earnings);
    const g = parseFloat(growth) / 100;
    const d = parseFloat(discount) / 100;
    if (!e || !d || d <= g) return;
    // Simple DCF perpetuity: E * (1+g) / (d - g)
    const val = (e * (1 + g)) / (d - g);
    setResult(Math.round(val * 100) / 100);
  };

  return (
    <div className="border border-border/60 rounded-lg p-6 bg-card/60 backdrop-blur-sm border-glow-gold">
      <h3 className="font-display text-xl text-primary text-glow-gold mb-1">
        Intrinsic Value Calculator
      </h3>
      <p className="text-muted-foreground text-sm mb-5">
        Simple DCF model: estimate what a business is worth based on earnings, growth, and your required return.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label className="text-xs text-muted-foreground">Current Earnings ($)</Label>
          <Input
            type="number"
            placeholder="e.g. 5"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
            className="mt-1 bg-muted/50 border-border/50"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Growth Rate (%)</Label>
          <Input
            type="number"
            placeholder="e.g. 8"
            value={growth}
            onChange={(e) => setGrowth(e.target.value)}
            className="mt-1 bg-muted/50 border-border/50"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Discount Rate (%)</Label>
          <Input
            type="number"
            placeholder="e.g. 12"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="mt-1 bg-muted/50 border-border/50"
          />
        </div>
      </div>
      <Button onClick={calculate} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-transform">
        Calculate
      </Button>
      {result !== null && (
        <p className="mt-4 text-lg font-semibold text-primary animate-fade-in">
          Estimated Intrinsic Value: <span className="tabular-nums">${result.toLocaleString()}</span>
        </p>
      )}
    </div>
  );
}

function RuleOf72() {
  const [rate, setRate] = useState(8);
  const years = rate > 0 ? Math.round((72 / rate) * 10) / 10 : 0;

  return (
    <div className="border border-border/60 rounded-lg p-6 bg-card/60 backdrop-blur-sm border-glow-gold">
      <h3 className="font-display text-xl text-primary text-glow-gold mb-1">
        Rule of 72
      </h3>
      <p className="text-muted-foreground text-sm mb-5">
        How many years to double your money? Divide 72 by your annual return rate.
      </p>
      <div className="space-y-4">
        <div>
          <Label className="text-xs text-muted-foreground">Annual Return Rate: {rate}%</Label>
          <Slider
            value={[rate]}
            onValueChange={(v) => setRate(v[0])}
            min={1}
            max={30}
            step={0.5}
            className="mt-2"
          />
        </div>
        <p className="text-lg font-semibold text-primary">
          Your money doubles in ≈ <span className="tabular-nums">{years}</span> years
        </p>
      </div>
    </div>
  );
}

const moatDimensions = [
  "Brand Power",
  "Switching Costs",
  "Network Effects",
  "Cost Advantage",
  "Regulatory Barriers",
];

function MoatScorecard() {
  const [scores, setScores] = useState<number[]>([3, 3, 3, 3, 3]);
  const total = scores.reduce((a, b) => a + b, 0);
  const avg = Math.round((total / scores.length) * 10) / 10;

  const updateScore = (index: number, value: number) => {
    setScores((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const label =
    avg >= 4 ? "Wide Moat — Strong competitive position" :
    avg >= 3 ? "Moderate Moat — Decent but not unassailable" :
    avg >= 2 ? "Narrow Moat — Vulnerable to competition" :
    "No Moat — High competitive risk";

  return (
    <div className="border border-border/60 rounded-lg p-6 bg-card/60 backdrop-blur-sm border-glow-gold">
      <h3 className="font-display text-xl text-primary text-glow-gold mb-1">
        Moat Scorecard
      </h3>
      <p className="text-muted-foreground text-sm mb-5">
        Rate a company on five key moat dimensions (1–5 scale).
      </p>
      <div className="space-y-4">
        {moatDimensions.map((dim, i) => (
          <div key={dim}>
            <div className="flex justify-between mb-1">
              <Label className="text-sm text-foreground">{dim}</Label>
              <span className="text-xs text-muted-foreground tabular-nums">{scores[i]}/5</span>
            </div>
            <Slider
              value={[scores[i]]}
              onValueChange={(v) => updateScore(i, v[0])}
              min={1}
              max={5}
              step={1}
              className="mt-1"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border/40">
        <p className="text-lg font-semibold text-primary">
          Average: <span className="tabular-nums">{avg}</span>/5
        </p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
}

export default function InteractiveTools() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6">
      <div className="mb-8 animate-fade-in-up rounded-xl overflow-hidden">
        <img
          src={toolsImg}
          alt="Magical calculator and investment tools floating in space"
          className="w-full h-auto rounded-xl"
          loading="eager"
        />
      </div>

      <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <h1 className="font-display text-4xl sm:text-5xl text-primary text-glow-gold leading-tight mb-4">
          Interactive Tools
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
          Put the Oracle's wisdom into practice with these hands-on calculators.
        </p>
      </div>

      <div className="space-y-8">
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <IntrinsicValueCalc />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <RuleOf72 />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <MoatScorecard />
        </div>
      </div>
    </div>
  );
}
