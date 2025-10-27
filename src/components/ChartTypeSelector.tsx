import { Card } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { BarChart3, LineChart, PieChart, ScatterChart } from "lucide-react";

interface ChartTypeSelectorProps {
  chartType: string;
  onChartTypeChange: (value: string) => void;
}

export const ChartTypeSelector = ({
  chartType,
  onChartTypeChange,
}: ChartTypeSelectorProps) => {
  const chartTypes = [
    { value: "bar", label: "Bar Chart", icon: BarChart3 },
    { value: "line", label: "Line Chart", icon: LineChart },
    { value: "pie", label: "Pie Chart", icon: PieChart },
    { value: "scatter", label: "Scatter Plot", icon: ScatterChart },
  ];

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="space-y-2">
        <Label htmlFor="chart-type" className="text-foreground">
          Chart Type
        </Label>
        <Select value={chartType} onValueChange={onChartTypeChange}>
          <SelectTrigger id="chart-type" className="bg-input border-border">
            <SelectValue placeholder="Select chart type" />
          </SelectTrigger>
          <SelectContent>
            {chartTypes.map((type) => {
              const Icon = type.icon;
              return (
                <SelectItem key={type.value} value={type.value}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {type.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};
