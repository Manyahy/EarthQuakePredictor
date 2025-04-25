
import { formatRelativeTime } from "@/lib/mock-data";
import { Earthquake } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface EarthquakeCardProps {
  earthquake: Earthquake;
}

const EarthquakeCard = ({ earthquake }: EarthquakeCardProps) => {
  // Determine color based on risk level
  const getRiskColor = (risk: string) => {
    switch(risk) {
      case "high": return "bg-red-500";
      case "moderate": return "bg-amber-500";
      case "low": return "bg-green-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <Card className="overflow-hidden border-l-4 hover:shadow-lg transition-all" 
          style={{ borderLeftColor: earthquake.risk === "high" ? "#ef4444" : 
                                    earthquake.risk === "moderate" ? "#f59e0b" : "#22c55e" }}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{earthquake.place}</CardTitle>
          <Badge className={getRiskColor(earthquake.risk)}>
            M {earthquake.magnitude.toFixed(1)}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{formatRelativeTime(earthquake.time)}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500">Depth</p>
            <p className="font-medium">{earthquake.depth} km</p>
          </div>
          <div>
            <p className="text-gray-500">Significance</p>
            <p className="font-medium">{earthquake.significance}</p>
          </div>
        </div>
        
        {earthquake.tsunamiWarning && (
          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
            <p className="text-xs text-red-600 font-medium">Tsunami Warning Active</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EarthquakeCard;
