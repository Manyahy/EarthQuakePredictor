
// Types for earthquake data
export interface Earthquake {
  id: string;
  time: string;
  magnitude: number;
  depth: number;
  location: {
    lat: number;
    lng: number;
  };
  place: string;
  tsunamiWarning: boolean;
  significance: number;
  risk: "low" | "moderate" | "high";
}

export interface PredictionData {
  id: string;
  region: string;
  location: {
    lat: number;
    lng: number;
  };
  probability: number;
  potentialMagnitude: number;
  timeframe: string;
  risk: "low" | "moderate" | "high";
  factors: string[];
}

export interface AlertZone {
  id: string;
  region: string;
  risk: "low" | "moderate" | "high";
  evacuationStatus: "none" | "advisory" | "warning" | "order";
  affectedPopulation: number;
}
