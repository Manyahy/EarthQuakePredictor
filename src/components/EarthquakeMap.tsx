
import { useState } from "react";

interface EarthquakeMapProps {
  className?: string;
}

const EarthquakeMap = ({ className = "" }: EarthquakeMapProps) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // In a real app, we would integrate with a mapping library like Leaflet or Google Maps
  return (
    <div className={`relative ${className} bg-slate-100 rounded-lg overflow-hidden border border-slate-300`}>
      {/* Placeholder for the actual map */}
      <div className="p-4 h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" 
            className="w-full h-full object-cover" 
            alt="Earthquake Map" 
            onLoad={() => setIsMapLoaded(true)}
          />
          
          {/* Map markers */}
          <div className="absolute" style={{ top: '30%', left: '40%' }}>
            <div className="animate-ping absolute h-5 w-5 rounded-full bg-red-500 opacity-75"></div>
            <div className="relative rounded-full h-4 w-4 bg-red-600"></div>
          </div>
          <div className="absolute" style={{ top: '55%', left: '25%' }}>
            <div className="animate-ping absolute h-4 w-4 rounded-full bg-amber-400 opacity-75"></div>
            <div className="relative rounded-full h-3 w-3 bg-amber-500"></div>
          </div>
          <div className="absolute" style={{ top: '35%', left: '70%' }}>
            <div className="animate-ping absolute h-4 w-4 rounded-full bg-red-500 opacity-75"></div>
            <div className="relative rounded-full h-3 w-3 bg-red-600"></div>
          </div>
          
          {/* Map overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-lg font-bold">Global Seismic Activity</h3>
            <p className="text-white text-sm opacity-90">Showing recent earthquakes and prediction zones</p>
          </div>
        </div>

        {/* Loading state */}
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            <p className="text-slate-600">Loading map data...</p>
          </div>
        )}
      </div>
      
      {/* Map controls */}
      <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
        <button className="p-2 bg-white rounded shadow">➕</button>
        <button className="p-2 bg-white rounded shadow">➖</button>
      </div>
      
      {/* Map layers */}
      <div className="absolute top-2 left-2 z-10">
        <div className="bg-white p-2 rounded shadow">
          <div className="flex items-center text-xs mb-1">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span>High Risk</span>
          </div>
          <div className="flex items-center text-xs mb-1">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeMap;
