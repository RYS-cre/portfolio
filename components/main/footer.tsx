import { Mail, Linkedin, Github, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function Footer() {
    return (
        <footer className="flex flex-col gap-4 my-8 mx-16">
            <Card className="relative z-0">
                <CardHeader>
                    <CardTitle className="text-center">
                        Thanks for taking a look at my portfolio
                    </CardTitle>
                    <CardDescription className="text-center">
                        Feel free to contact me via email or LinkedIn and lets chat about some cool projects!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex-1 flex flex-row gap-2 justify-center">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="mailto:rhys@bynitrone.com">
                                    <Button variant="ghost" size="icon">
                                        <Mail className="size-4" />
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>rhys@bynitrone.com</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="https://www.linkedin.com/in/rhys-mulholland-5915562a5/">
                                    <Button variant="ghost" size="icon" >
                                        <Linkedin className="size-4" />
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>rhys-mulholland-5915562a5</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="https://x.com/rhys_mulholland">
                                    <Button variant="ghost" size="icon">
                                        <Twitter className="size-4" />
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>@rhys_mulholland</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>                    
                </CardContent>
                <div className="w-7/8 mx-auto">
                    <Separator />
                </div>
                <CardFooter>
                    <p className="w-full text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} - All rights reserved - Built from scratch with Next.js, Tailwind CSS, and Shadcn UI
                    </p>
                </CardFooter>
            </Card>
        </footer>
    )
}