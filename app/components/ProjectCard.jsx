import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Github, ExternalLink, Calendar } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
    const { name, timeline, desc, badges, website, github, coverImage, status } = project;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
            case 'Development':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'Completed':
                return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
        }
    };

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">💻</div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                        <Badge className={`${getStatusColor(status)} text-xs font-medium`}>
                            {status}
                        </Badge>
                    </div>
                </div>

                <CardContent className="p-6">
                    {/* Project Header */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                            {name}
                        </h3>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {timeline}
                        </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {desc}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {badges.map((tech, index) => (
                            <Badge 
                                key={index} 
                                variant="secondary" 
                                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                    <div className="flex gap-3 w-full">
                        {github && (
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
                                asChild
                            >
                                <Link href={github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    Code
                                </Link>
                            </Button>
                        )}
                        {website && (
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
                                asChild
                            >
                                <Link href={website} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live
                                </Link>
                            </Button>
                        )}
                        {!github && !website && (
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
                                disabled
                            >
                                <Globe className="w-4 h-4 mr-2" />
                                Coming Soon
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
