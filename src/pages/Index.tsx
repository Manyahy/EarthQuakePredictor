
import { useEffect } from "react";
import Header from "@/components/Header";
import StatisticsCards from "@/components/StatisticsCards";
import EarthquakeMap from "@/components/EarthquakeMap";
import RecentEarthquakes from "@/components/RecentEarthquakes";
import DataCharts from "@/components/DataCharts";
import PredictionInput from "@/components/PredictionInput";
import { recentEarthquakes } from "@/lib/mock-data";

const Index = () => {
  useEffect(() => {
    document.title = "QuakeWatchGuard - Earthquake Prediction System";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Earthquake Monitoring Dashboard</h1>
        <p className="text-slate-600 mb-8">Real-time seismic activity monitoring and prediction system</p>
        
        <StatisticsCards />
        
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <EarthquakeMap className="h-[400px]" />
          </div>
          <div>
            <RecentEarthquakes earthquakes={recentEarthquakes} />
          </div>
          <div>
            <PredictionInput />
          </div>
        </div>
        
        <div className="mt-8">
          <DataCharts />
        </div>
      </main>
      
      <footer className="bg-slate-800 text-slate-300 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 QuakeWatchGuard - Advanced Earthquake Prediction System</p>
          <p className="text-sm mt-1">This is a simulation for educational purposes only</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
