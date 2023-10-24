import { StaticImageData } from "next/image";

interface TestimonyData {
    name: string;
    tag: string;
    text: string;
    image: StaticImageData | boolean;
    date: Date;
}

