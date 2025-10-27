import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import html2canvas from "html2canvas";
import { toast } from "sonner";
import { useRef } from "react";

interface ChartRendererProps {
  data: any[];
  chartType: string;
  xAxis: string;
  yAxis: string;
}

const COLORS = [
  "hsl(240, 75%, 60%)",
  "hsl(190, 75%, 50%)",
  "hsl(30, 95%, 60%)",
  "hsl(280, 75%, 60%)",
  "hsl(140, 75%, 50%)",
  "hsl(0, 75%, 60%)",
];

export const ChartRenderer = ({
  data,
  chartType,
  xAxis,
  yAxis,
}: ChartRendererProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const downloadChart = async () => {
    if (!chartRef.current) return;

    try {
      const canvas = await html2canvas(chartRef.current, {
        backgroundColor: "#1a1d2e",
        scale: 2,
      });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `chart-${Date.now()}.png`;
      link.href = image;
      link.click();
      toast.success("Chart downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download chart");
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 20%)" />
              <XAxis dataKey={xAxis} stroke="hsl(210, 40%, 98%)" />
              <YAxis stroke="hsl(210, 40%, 98%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 25%, 12%)",
                  border: "1px solid hsl(220, 20%, 20%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Bar dataKey={yAxis} fill="hsl(240, 75%, 60%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 20%)" />
              <XAxis dataKey={xAxis} stroke="hsl(210, 40%, 98%)" />
              <YAxis stroke="hsl(210, 40%, 98%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 25%, 12%)",
                  border: "1px solid hsl(220, 20%, 20%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey={yAxis}
                stroke="hsl(190, 75%, 50%)"
                strokeWidth={3}
                dot={{ fill: "hsl(190, 75%, 50%)", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey={yAxis}
                nameKey={xAxis}
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 25%, 12%)",
                  border: "1px solid hsl(220, 20%, 20%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case "scatter":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 20%)" />
              <XAxis dataKey={xAxis} stroke="hsl(210, 40%, 98%)" />
              <YAxis dataKey={yAxis} stroke="hsl(210, 40%, 98%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 25%, 12%)",
                  border: "1px solid hsl(220, 20%, 20%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Scatter name="Data Points" data={data} fill="hsl(30, 95%, 60%)" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-foreground">Chart Preview</h3>
        <Button onClick={downloadChart} variant="default" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
      </div>
      <div ref={chartRef} className="w-full h-[400px] bg-chart rounded-lg p-4">
        {renderChart()}
      </div>
    </Card>
  );
};
