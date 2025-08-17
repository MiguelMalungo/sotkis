import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CalendarDemo = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-white">Calendar Demo</h1>
        <p className="text-gray-300">Shadcn Calendar component with green selected days</p>
      </div>

      {/* Calendar Card */}
      <Card className="card-glass max-w-sm">
        <CardHeader>
          <CardTitle className="text-white">Select a Date</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </CardContent>
      </Card>

      {/* Selected Date Display */}
      <Card className="card-glass max-w-sm">
        <CardHeader>
          <CardTitle className="text-white">Selected Date</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white">
            {date ? date.toLocaleDateString('pt-BR') : 'No date selected'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarDemo; 