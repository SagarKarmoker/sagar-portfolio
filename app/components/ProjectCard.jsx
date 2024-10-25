import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const { name, timeline, desc, badges, website, github, coverImage } = project;

    return (
        <Card className="flex flex-col max-w-md mx-auto overflow-hidden h-full"> {/* Flex container */}
            {/* <CardHeader className="p-0">
                <div className="relative h-48">
                    <Image
                        src=""
                        alt="Project preview"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            </CardHeader> */}
            <CardContent className="p-3 flex-grow mt-4"> {/* Flex child that grows */}
                <h2 className="text-2xl font-bold mb-2 text-center">{name}</h2>
                <p className="text-sm text-gray-500 mb-4">{timeline}</p>
                <p className="text-sm mb-4">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {badges.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 mt-auto"> {/* Flex child at the bottom */}
                <Button variant="outline" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    <Link href={website || "#!"} passHref>
                        Website
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
