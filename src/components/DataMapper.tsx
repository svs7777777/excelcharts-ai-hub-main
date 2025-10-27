import { Card } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface DataMapperProps {
  columns: string[];
  xAxis: string;
  yAxis: string;
  onXAxisChange: (value: string) => void;
  onYAxisChange: (value: string) => void;
}

export const DataMapper = ({
  columns,
  xAxis,
  yAxis,
  onXAxisChange,
  onYAxisChange,
}: DataMapperProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Select Data Axes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="x-axis" className="text-foreground">
            X-Axis
          </Label>
          <Select value={xAxis} onValueChange={onXAxisChange}>
            <SelectTrigger id="x-axis" className="bg-input border-border">
              <SelectValue placeholder="Select X-axis column" />
            </SelectTrigger>
            <SelectContent>
              {columns.map((col) => (
                <SelectItem key={col} value={col}>
                  {col}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="y-axis" className="text-foreground">
            Y-Axis
          </Label>
          <Select value={yAxis} onValueChange={onYAxisChange}>
            <SelectTrigger id="y-axis" className="bg-input border-border">
              <SelectValue placeholder="Select Y-axis column" />
            </SelectTrigger>
            <SelectContent>
              {columns.map((col) => (
                <SelectItem key={col} value={col}>
                  {col}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};
