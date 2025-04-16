import {MoveRight} from "lucide-react";
import * as React from "react";

export interface GlobalHeroProps {
    image: {
        src: string;
        alt: string;
    };
    headline: string;
    desciption: string;
    action: {
        primary: {
            title: string;
            url: string;
        };
        secondary: {
            title: string;
            url: string;
        };
    };
}

export const GlobalHero = ({
                               image,
                               headline,
                               desciption,
                               action,
                           }: GlobalHeroProps) => {
    return (
        <section>
            <div className="container py-24 mx-auto">
                <div className="relative h-[500px] flex-1">
                    <div
                        className="absolute inset-0 flex size-full items-center justify-center overflow-hidden rounded-xl object-cover">
                        <img src={image.src} alt={image.alt}
                             className="inline-block size-full max-w-full object-cover align-middle"/>

                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                             className="absolute z-20 size-14 text-white">
                            <path fill="currentColor"
                                  d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22">
                            </path>
                        </svg>
                        <span className="absolute inset-0 z-10 bg-black/50"></span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 pt-12">
                    <div>
                        <h1 className="mb-8 flex max-w-6xl text-4xl font-semibold leading-none tracking-tight text-gray-800 md:text-6xl">
                            {headline}
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg leading-normal text-gray-500">
                            {desciption}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start mt-8">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                                {action.primary.title}
                            </button>
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                                {action.secondary.title}
                                <MoveRight className="pl-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
