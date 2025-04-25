
import { AlertZone } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface AlertSystemProps {
  alertZones: AlertZone[];
  className?: string;
}

const AlertSystem = ({ alertZones, className = "" }: AlertSystemProps) => {
  const getEvacuationStatusColor = (status: string) => {
    switch(status) {
      case "order": return "bg-red-700 text-white";
      case "warning": return "bg-red-500 text-white";
      case "advisory": return "bg-amber-500";
      case "none": 
      default: return "bg-blue-500";
    }
  };

  const getRiskBorderColor = (risk: string) => {
    switch(risk) {
      case "high": return "border-red-500";
      case "moderate": return "border-amber-500";
      case "low": return "border-green-500";
      default: return "";
    }
  };
  
  const formatPopulation = (population: number) => {
    return new Intl.NumberFormat().format(population);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Alert System</h2>
        <button className="text-sm text-blue-600 hover:underline">Manage Alerts</button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {alertZones.map((zone) => (
          <Card 
            key={zone.id} 
            className={`hover:shadow-md transition-shadow ${getRiskBorderColor(zone.risk)} border-l-4`}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-medium">{zone.region}</CardTitle>
                <Badge className={getEvacuationStatusColor(zone.evacuationStatus)}>
                  {zone.evacuationStatus === "none" ? "MONITORING" : 
                   `${zone.evacuationStatus.toUpperCase()}`}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm text-gray-500">Risk Level</p>
                  <p className="font-medium">{zone.risk.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Population</p>
                  <p className="font-medium">{formatPopulation(zone.affectedPopulation)}</p>
                </div>
              </div>
              
              {zone.evacuationStatus !== "none" && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-700">
                    {zone.evacuationStatus === "order" ? "EVACUATE IMMEDIATELY" :
                     zone.evacuationStatus === "warning" ? "Prepare for possible evacuation" :
                     "Stay alert and monitor updates"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {alertZones.length === 0 && (
          <p className="col-span-full text-gray-500 text-center py-4">No active alert zones</p>
        )}
      </div>
    </div>
  );
};

export default AlertSystem;
