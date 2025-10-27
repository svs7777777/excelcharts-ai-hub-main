import { useState } from "react";
import * as XLSX from "xlsx";
import { FileUpload } from "@/components/FileUpload";
import { DataPreview } from "@/components/DataPreview";
import { DataMapper } from "@/components/DataMapper";
import { ChartTypeSelector } from "@/components/ChartTypeSelector";
import { ChartRenderer } from "@/components/ChartRenderer";
import { Button } from "@/components/ui/button";
import { BarChart3, LogOut } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [excelData, setExcelData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [xAxis, setXAxis] = useState<string>("");
  const [yAxis, setYAxis] = useState<string>("");
  const [chartType, setChartType] = useState<string>("bar");

  const handleFileSelect = async (file: File) => {
    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      if (jsonData.length > 0) {
        const cols = Object.keys(jsonData[0]);
        setColumns(cols);
        setExcelData(jsonData);
        setXAxis(cols[0]);
        setYAxis(cols[1] || cols[0]);
      }
    } catch (error) {
      toast.error("Failed to parse Excel file");
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    window.location.href = "/auth";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Excel Analytics
            </h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Transform Your Data Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Beautiful Charts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your Excel files and create stunning visualizations in seconds
          </p>
        </div>

        {/* Upload Section */}
        <FileUpload onFileSelect={handleFileSelect} />

        {/* Data Preview and Controls */}
        {excelData.length > 0 && (
          <>
            <DataPreview data={excelData} columns={columns} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DataMapper
                columns={columns}
                xAxis={xAxis}
                yAxis={yAxis}
                onXAxisChange={setXAxis}
                onYAxisChange={setYAxis}
              />
              <ChartTypeSelector
                chartType={chartType}
                onChartTypeChange={setChartType}
              />
            </div>

            {/* Chart Display */}
            {xAxis && yAxis && (
              <ChartRenderer
                data={excelData}
                chartType={chartType}
                xAxis={xAxis}
                yAxis={yAxis}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
