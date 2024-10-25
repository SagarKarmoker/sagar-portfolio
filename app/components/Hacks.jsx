import { Card, CardContent } from "@/components/ui/card"
import { Laptop, MapPin, Calendar } from "lucide-react"

export default function Hacks({ events }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Hackathon Timeline</h2>
            <div className="space-y-8">
                {events.map((event, index) => (
                    <Card key={index} className="relative">
                        <div className="absolute left-4 top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-lg">
                            {event.icon}
                        </div>
                        <CardContent className="pt-8 pl-16">
                            <h3 className="font-semibold text-lg">{event.title}</h3>
                            <div className="text-sm text-muted-foreground mb-2 flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {event.date}
                            </div>
                            <div className="text-sm text-muted-foreground mb-2 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                            </div>
                            <div className="text-sm flex items-start">
                                <Laptop className="w-4 h-4 mr-1 mt-1 flex-shrink-0" />
                                <p>{event.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}