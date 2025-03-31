import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    CardBody,
    CardContainer,
    CardItem
} from "@/components/ui/3d-card";
import Image from "next/image";
import evanAlvarez from "./myGoat.jpeg";
export default function Projects() {
    const projects = [
        { title: "Project 1", description: "This is Project 1!", image: evanAlvarez, link: "https://github.com" },
    ];
    return (
        <main className="mx-auto flex flex-col w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="mb-4 py-5 text-center text-4xl font-bold hover:underline tracking-tight md:text-5xl">
                <Link href="/projects">Projects 👨🏻‍💻</Link>
            </h1>
            <div className="flex justify-center w-full">
                { (projects.length > 1) ?
                <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    <CardContainer className="inter-var">
                                        <CardBody className="relative group/card  border-everforest-bg-dim/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-2 ">
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                            >
                                                {project.title}
                                            </CardItem>
                                            <CardItem translateZ="100" className="w-full mt-4">
                                                <Image
                                                    src={project.image}
                                                    height="1000"
                                                    width="1000"
                                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                    alt="thumbnail"
                                                />
                                            </CardItem>
                                            <div className="flex justify-between items-center mt-20">
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href={project.link}
                                                    target="__blank"
                                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                                >
                                                    Go to {project.title}
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
                : <div className="flex justify-center w-full">Let me cook alr</div>
                }
            </div>
        </main>
    );
}