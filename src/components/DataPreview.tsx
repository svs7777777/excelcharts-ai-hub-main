import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ScrollArea } from "./ui/scroll-area";

interface DataPreviewProps {
  data: any[];
  columns: string[];
}

export const DataPreview = ({ data, columns }: DataPreviewProps) => {
  const previewData = data.slice(0, 5);

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Data Preview
      </h3>
      <ScrollArea className="h-[250px] w-full rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col} className="text-foreground font-semibold">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {previewData.map((row, idx) => (
              <TableRow key={idx}>
                {columns.map((col) => (
                  <TableCell key={col} className="text-muted-foreground">
                    {row[col]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <p className="text-sm text-muted-foreground mt-2">
        Showing {previewData.length} of {data.length} rows
      </p>
    </Card>
  );
};
