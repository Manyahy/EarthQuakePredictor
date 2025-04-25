
import { Earthquake, PredictionData, AlertZone } from "./types";

// Recent earthquake mock data
export const recentEarthquakes: Earthquake[] = [
  {
    id: "1",
    time: "2025-04-22T09:15:00",
    magnitude: 5.8,
    depth: 10.2,
    location: { lat: 35.6762, lng: 139.6503 },
    place: "Tokyo, Japan",
    tsunamiWarning: false,
    significance: 75,
    risk: "moderate"
  },
  {
    id: "2",
    time: "2025-04-22T07:43:00",
    magnitude: 4.2,
    depth: 7.5,
    location: { lat: 34.0522, lng: -118.2437 },
    place: "Los Angeles, USA",
    tsunamiWarning: false,
    significance: 45,
    risk: "low"
  },
  {
    id: "3",
    time: "2025-04-21T22:18:00",
    magnitude: 6.7,
    depth: 15.3,
    location: { lat: -33.4489, lng: -70.6693 },
    place: "Santiago, Chile",
    tsunamiWarning: true,
    significance: 89,
    risk: "high"
  },
  {
    id: "4",
    time: "2025-04-21T16:37:00",
    magnitude: 3.9,
    depth: 5.8,
    location: { lat: 37.7749, lng: -122.4194 },
    place: "San Francisco, USA",
    tsunamiWarning: false,
    significance: 30,
    risk: "low"
  },
  {
    id: "5",
    time: "2025-04-20T13:12:00",
    magnitude: 7.1,
    depth: 22.1,
    location: { lat: 19.4326, lng: -99.1332 },
    place: "Mexico City, Mexico",
    tsunamiWarning: true,
    significance: 95,
    risk: "high"
  }
];

// Prediction data mock
export const predictionData: PredictionData[] = [
  {
    id: "p1",
    region: "Pacific Ring of Fire - Japan Segment",
    location: { lat: 35.7, lng: 139.7 },
    probability: 0.78,
    potentialMagnitude: 6.2,
    timeframe: "Next 30 days",
    risk: "high",
    factors: ["Recent seismic activity", "Tectonic plate pressure", "Historical patterns"]
  },
  {
    id: "p2",
    region: "San Andreas Fault Zone",
    location: { lat: 34.1, lng: -118.3 },
    probability: 0.45,
    potentialMagnitude: 5.5,
    timeframe: "Next 60 days",
    risk: "moderate",
    factors: ["Minor foreshocks detected", "Fault strain measurements"]
  },
  {
    id: "p3",
    region: "New Madrid Seismic Zone",
    location: { lat: 36.6, lng: -89.8 },
    probability: 0.12,
    potentialMagnitude: 4.0,
    timeframe: "Next 90 days",
    risk: "low",
    factors: ["Historical cycle analysis", "Minor ground deformation"]
  }
];

// Alert zones mock data
export const alertZones: AlertZone[] = [
  {
    id: "a1",
    region: "Tokyo Metropolitan Area",
    risk: "high",
    evacuationStatus: "advisory",
    affectedPopulation: 9700000
  },
  {
    id: "a2",
    region: "Los Angeles County",
    risk: "moderate",
    evacuationStatus: "none",
    affectedPopulation: 3900000
  },
  {
    id: "a3",
    region: "Santiago Province",
    risk: "high",
    evacuationStatus: "warning",
    affectedPopulation: 5600000
  }
];

// Historical data for charts
export const historicalData = [
  { month: "Jan", events: 12, avgMagnitude: 5.1 },
  { month: "Feb", events: 8, avgMagnitude: 4.7 },
  { month: "Mar", events: 15, avgMagnitude: 5.3 },
  { month: "Apr", events: 10, avgMagnitude: 4.9 },
  { month: "May", events: 7, avgMagnitude: 4.2 },
  { month: "Jun", events: 14, avgMagnitude: 5.8 },
  { month: "Jul", events: 18, avgMagnitude: 5.7 },
  { month: "Aug", events: 16, avgMagnitude: 5.4 },
  { month: "Sep", events: 9, avgMagnitude: 4.6 },
  { month: "Oct", events: 11, avgMagnitude: 5.0 },
  { month: "Nov", events: 13, avgMagnitude: 5.2 },
  { month: "Dec", events: 10, avgMagnitude: 4.8 }
];

// Risk factors calculation (simplified for mock)
export const calculateRisk = (magnitude: number, depth: number, location: {lat: number, lng: number}): "low" | "moderate" | "high" => {
  // This is a simplified model. Real models would be much more complex.
  if (magnitude >= 6.5) return "high";
  if (magnitude >= 5.0 || depth < 10) return "moderate";
  return "low";
};

// Format relative time
export const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.round(diffMs / 60000);
  
  if (diffMins < 60) return `${diffMins} minutes ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;
  return `${Math.floor(diffHours / 24)} days ago`;
};
