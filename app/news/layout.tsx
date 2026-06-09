import { ReactNode } from "react"
import Hero from "../_components/Hero/Hero";
import Sheet from "../_components/Sheet/Sheet";
import { title } from "process";


export const metadata = {
    title: "ニュース",
};


type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children}:Props) {
    return(
    <>
        <Hero title= "News" sub="ニュース" />
        <Sheet>
            {children}
        </Sheet>
    </>
    );
}