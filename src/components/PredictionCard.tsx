
import { PredictionData } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

interface PredictionCardProps {
  prediction: PredictionData;
}

const PredictionCard = ({ prediction }: PredictionCardProps) => {
  const getRiskColor = (risk: string) => {
    switch(risk) {
      case "high": return "bg-red-500";
      case "moderate": return "bg-amber-500";
      case "low": return "bg-green-500";
      default: return "bg-blue-500";
    }
  };

  const getProbabilityColor = (prob: number) => {
    if (prob >= 0.7) return "bg-red-500";
    if (prob >= 0.4) return "bg-amber-500";
    return "bg-green-500";
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{prediction.region}</CardTitle>
          <Badge className={getRiskColor(prediction.risk)}>
            {prediction.risk.toUpperCase()} RISK
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{prediction.timeframe}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Probability</span>
              <span className="text-sm font-medium">{(prediction.probability * 100).toFixed(0)}%</span>
            </div>
            <Progress 
              value={prediction.probability * 100} 
              className={getProbabilityColor(prediction.probability)}
            />
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Potential Magnitude</p>
            <p className="text-2xl font-bold">{prediction.potentialMagnitude.toFixed(1)}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Contributing Factors</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {prediction.factors.map((factor, idx) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionCard;
