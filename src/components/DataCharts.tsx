
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { historicalData } from '@/lib/mock-data';

interface DataChartsProps {
  data?: typeof historicalData;
  className?: string;
}

const DataCharts = ({ data = historicalData, className = "" }: DataChartsProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Monthly Earthquake Frequency</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="events" name="Events" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Average Magnitude Trend</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} domain={[3, 7]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="avgMagnitude" 
                  name="Avg Magnitude"
                  stroke="#ef4444" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCharts;
