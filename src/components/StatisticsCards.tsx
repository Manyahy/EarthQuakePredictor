
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: JSX.Element;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const StatCard = ({ title, value, description, icon, trend, trendValue }: StatCardProps) => {
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";
  const trendColor = trend === "up" ? "text-red-500" : trend === "down" ? "text-green-500" : "text-blue-400";
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && trendValue && (
          <div className="mt-2">
            <span className={`text-xs ${trendColor} font-medium`}>
              {trendIcon} {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface StatisticsCardsProps {
  totalEarthquakes?: number;
  highRiskZones?: number;
  activePredictions?: number;
  alertsIssued?: number;
}

const StatisticsCards = ({ 
  totalEarthquakes = 127, 
  highRiskZones = 3, 
  activePredictions = 8, 
  alertsIssued = 2 
}: StatisticsCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Earthquakes"
        value={totalEarthquakes}
        description="Last 30 days"
        icon={<div className="p-2 bg-blue-100 rounded-full"><span className="text-blue-600">🔍</span></div>}
        trend="up"
        trendValue="+14% from last month"
      />
      <StatCard
        title="High Risk Zones"
        value={highRiskZones}
        description="Currently monitored"
        icon={<div className="p-2 bg-red-100 rounded-full"><span className="text-red-600">⚠️</span></div>}
        trend="up"
        trendValue="+1 from last week"
      />
      <StatCard
        title="Active Predictions"
        value={activePredictions}
        description="In prediction model"
        icon={<div className="p-2 bg-purple-100 rounded-full"><span className="text-purple-600">📊</span></div>}
        trend="neutral"
        trendValue="No change"
      />
      <StatCard
        title="Alerts Issued"
        value={alertsIssued}
        description="Last 7 days"
        icon={<div className="p-2 bg-amber-100 rounded-full"><span className="text-amber-600">🔔</span></div>}
        trend="down"
        trendValue="-1 from last week"
      />
    </div>
  );
};

export default StatisticsCards;
