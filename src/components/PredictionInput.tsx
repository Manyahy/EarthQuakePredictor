import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { calculateRisk } from "@/lib/mock-data";
import { MapPin, AlertTriangle, ArrowDown, Calendar, ChartBar } from "lucide-react";

const geoRiskZones = [
  {
    name: "High-Risk Zone",
    bounds: { latMin: 30, latMax: 40, lngMin: 130, lngMax: 145 },
    expectedFrequency: "High (5-7 events per year)",
    magnitudeRange: "5.5 - 7.8",
    confidenceLevel: "Very High (95%)"
  },
  {
    name: "Medium-Risk Zone",
    bounds: { latMin: 35, latMax: 45, lngMin: 25, lngMax: 40 },
    expectedFrequency: "Moderate (2-4 events per year)",
    magnitudeRange: "4.0 - 6.2",
    confidenceLevel: "Moderate (75%)"
  },
  {
    name: "Low-Risk Zone",
    bounds: { latMin: 10, latMax: 20, lngMin: 10, lngMax: 30 },
    expectedFrequency: "Low (0-1 events per year)",
    magnitudeRange: "3.0 - 4.5",
    confidenceLevel: "High (85%)"
  }
];

const PredictionInput = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [lastDepth, setLastDepth] = useState("");
  const [daysSinceLastQuake, setDaysSinceLastQuake] = useState("");
  const [avgMagnitudeLastWeek, setAvgMagnitudeLastWeek] = useState("");
  const [predictionResult, setPredictionResult] = useState<any>(null);

  const checkZone = (lat: number, lng: number) => {
    for (const zone of geoRiskZones) {
      const { bounds } = zone;
      if (
        lat >= bounds.latMin && 
        lat <= bounds.latMax && 
        lng >= bounds.lngMin && 
        lng <= bounds.lngMax
      ) {
        return zone;
      }
    }
    return null;
  };

  const handlePrediction = () => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    const depth = parseFloat(lastDepth);
    const days = parseFloat(daysSinceLastQuake);
    const avgMag = parseFloat(avgMagnitudeLastWeek);

    if (isNaN(lat) || isNaN(lng)) {
      toast.error("Please enter valid coordinates");
      return;
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      toast.error("Invalid coordinates range");
      return;
    }

    if (isNaN(depth) || depth < 0) {
      toast.error("Please enter a valid depth");
      return;
    }

    if (isNaN(days) || days < 0) {
      toast.error("Please enter valid days since last earthquake");
      return;
    }

    if (isNaN(avgMag) || avgMag < 0 || avgMag > 10) {
      toast.error("Please enter a valid average magnitude (0-10)");
      return;
    }

    const risk = calculateRisk(5.0, 10.0, { lat, lng });
    const zone = checkZone(lat, lng);
    
    if (zone) {
      setPredictionResult({
        risk,
        zone,
        coordinates: { lat, lng },
        historicalData: {
          lastDepth: depth,
          daysSinceLastQuake: days,
          avgMagnitudeLastWeek: avgMag
        }
      });
      
      toast.success(`Location falls within ${zone.name}`, {
        description: `Risk level: ${risk.toUpperCase()}`
      });
    } else {
      setPredictionResult({
        risk,
        zone: null,
        coordinates: { lat, lng },
        historicalData: {
          lastDepth: depth,
          daysSinceLastQuake: days,
          avgMagnitudeLastWeek: avgMag
        }
      });
      
      const riskColors = {
        high: "bg-red-100 text-red-700",
        moderate: "bg-yellow-100 text-yellow-700",
        low: "bg-green-100 text-green-700"
      };
      
      toast.success("Location analyzed", {
        description: (
          <div className={`p-2 rounded-md ${riskColors[risk]}`}>
            <p className="font-medium">Risk Level: {risk.toUpperCase()}</p>
            <p className="text-sm mt-1">
              Coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}
            </p>
          </div>
        ),
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Earthquake Risk Prediction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Latitude</label>
          <Input
            type="number"
            placeholder="Enter latitude (-90 to 90)"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            min="-90"
            max="90"
            step="0.0001"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Longitude</label>
          <Input
            type="number"
            placeholder="Enter longitude (-180 to 180)"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            min="-180"
            max="180"
            step="0.0001"
          />
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-semibold mb-3">Historical Data</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 flex items-center gap-2">
                <ArrowDown className="h-4 w-4" />
                Last Earthquake Depth (km)
              </label>
              <Input
                type="number"
                placeholder="Enter depth in kilometers"
                value={lastDepth}
                onChange={(e) => setLastDepth(e.target.value)}
                min="0"
                step="0.1"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Days Since Last Earthquake
              </label>
              <Input
                type="number"
                placeholder="Enter number of days"
                value={daysSinceLastQuake}
                onChange={(e) => setDaysSinceLastQuake(e.target.value)}
                min="0"
                step="1"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 flex items-center gap-2">
                <ChartBar className="h-4 w-4" />
                Avg. Magnitude (Last 7 Days)
              </label>
              <Input
                type="number"
                placeholder="Enter average magnitude (0-10)"
                value={avgMagnitudeLastWeek}
                onChange={(e) => setAvgMagnitudeLastWeek(e.target.value)}
                min="0"
                max="10"
                step="0.1"
              />
            </div>
          </div>
        </div>

        <Button 
          className="w-full"
          onClick={handlePrediction}
        >
          Analyze Location
        </Button>
        
        {predictionResult && predictionResult.zone && (
          <Alert className={`mt-4 ${
            predictionResult.risk === "high" ? "border-red-500 bg-red-50" :
            predictionResult.risk === "moderate" ? "border-yellow-500 bg-yellow-50" :
            "border-green-500 bg-green-50"
          }`}>
            <MapPin className="h-4 w-4" />
            <AlertTitle className="font-medium">
              {predictionResult.zone.name} ({predictionResult.risk.toUpperCase()} Risk)
            </AlertTitle>
            <AlertDescription className="mt-2">
              <div className="space-y-2 text-sm">
                <div><strong>Expected Frequency:</strong> {predictionResult.zone.expectedFrequency}</div>
                <div><strong>Magnitude Range:</strong> {predictionResult.zone.magnitudeRange}</div>
                <div><strong>Confidence Level:</strong> {predictionResult.zone.confidenceLevel}</div>
                <div><strong>Last Earthquake Depth:</strong> {predictionResult.historicalData.lastDepth} km</div>
                <div><strong>Days Since Last Event:</strong> {predictionResult.historicalData.daysSinceLastQuake}</div>
                <div><strong>Avg. Magnitude (7 days):</strong> {predictionResult.historicalData.avgMagnitudeLastWeek}</div>
                <div className="pt-1">
                  <strong>Coordinates:</strong> {predictionResult.coordinates.lat.toFixed(4)}, {predictionResult.coordinates.lng.toFixed(4)}
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}
        
        {predictionResult && !predictionResult.zone && (
          <Alert className={`mt-4 ${
            predictionResult.risk === "high" ? "border-red-500 bg-red-50" :
            predictionResult.risk === "moderate" ? "border-yellow-500 bg-yellow-50" :
            "border-green-500 bg-green-50"
          }`}>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>General Risk Assessment</AlertTitle>
            <AlertDescription className="mt-2">
              <p>This location is not within our predefined risk zones. General risk level assessment: 
                <strong> {predictionResult.risk.toUpperCase()}</strong></p>
              <div className="mt-2 space-y-1">
                <div><strong>Last Earthquake Depth:</strong> {predictionResult.historicalData.lastDepth} km</div>
                <div><strong>Days Since Last Event:</strong> {predictionResult.historicalData.daysSinceLastQuake}</div>
                <div><strong>Avg. Magnitude (7 days):</strong> {predictionResult.historicalData.avgMagnitudeLastWeek}</div>
              </div>
              <p className="mt-2">For more accurate predictions, try coordinates within known seismic zones.</p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default PredictionInput;
