
import { Earthquake } from "@/lib/types";
import EarthquakeCard from "./EarthquakeCard";

interface RecentEarthquakesProps {
  earthquakes: Earthquake[];
  className?: string;
}

const RecentEarthquakes = ({ earthquakes, className = "" }: RecentEarthquakesProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Recent Earthquakes</h2>
        <button className="text-sm text-blue-600 hover:underline">View all</button>
      </div>
      
      <div className="space-y-3">
        {earthquakes.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No recent earthquakes recorded</p>
        ) : (
          earthquakes.map((earthquake) => (
            <EarthquakeCard key={earthquake.id} earthquake={earthquake} />
          ))
        )}
      </div>
    </div>
  );
};

export default RecentEarthquakes;
