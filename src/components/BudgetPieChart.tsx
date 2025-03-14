'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { budget: 'entertainment', amount: 50.0, fill: 'hsl(178, 51%, 32%)' }, // #277C78
  { budget: 'personal care', amount: 100.0, fill: 'hsl(252, 8%, 41%)' }, // #626070
  { budget: 'dinning out', amount: 75.0, fill: 'hsl(31, 71%, 81%)' }, // #F2CDAC
  { budget: 'bills', amount: 750.0, fill: 'hsl(191, 53%, 68%)' }, // #82C9D7
];
const chartData2Lighter = [
  { budget: 'entertainment', amount: 50.0, fill: 'hsl(178, 51%, 40%)' }, // lighter than #277C78
  { budget: 'personal care', amount: 100.0, fill: 'hsl(252, 8%, 48%)' }, // lighter than #626070
  { budget: 'dinning out', amount: 75.0, fill: 'hsl(31, 71%, 88%)' }, // lighter than #F2CDAC
  { budget: 'bills', amount: 750.0, fill: 'hsl(191, 53%, 75%)' }, // lighter than #82C9D7
];
const chartConfig = {
  entertainment: {
    label: 'Entertainment',
    color: 'hsl(178, 51%, 32%)',
  },
  bills: {
    label: 'Bills',
    color: 'hsl(191, 53%, 68%)',
  },
  'dinning out': {
    label: 'Dinning Out',
    color: 'hsl(31, 71%, 81%)',
  },
  'personal care': {
    label: 'Personal Care',
    color: 'hsl(252, 8%, 41%)',
  },
};

export default function BudgetPieChart() {
  const totalBudget = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <div className="bg-background p-6 rounded-lg">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          {/* Outer Pie Chart */}
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="budget"
            innerRadius={70}
            outerRadius={90}
            strokeWidth={5}
          />
          {/* Inner Pie Chart */}
          <Pie
            data={chartData2Lighter}
            dataKey="amount"
            nameKey="budget"
            innerRadius={60}
            outerRadius={71}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-2xl font-bold"
                      >
                        $338
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        className="fill-muted-foreground text-xs"
                      >
                        of ${totalBudget} limit
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
