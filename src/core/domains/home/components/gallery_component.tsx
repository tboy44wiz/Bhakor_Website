import { useState } from "react";

import { AltArrowLeft, AltArrowRight } from "solar-icon-set";
import GalleryOne from "@/assets/images/galleries/gallery_1.png";
import GalleryTwo from "@/assets/images/galleries/gallery_2.png";
import GalleryThree from "@/assets/images/galleries/gallery_3.png";
import GalleryFour from "@/assets/images/galleries/gallery_4.png";
import GalleryFive from "@/assets/images/galleries/gallery_5.png";


const galleryImages = [
    {
        src: GalleryOne,
        alt: "Gallery One",
        title: "Name or Nature of the Event",
        description: "Gallery showcasing our latest projects and innovations in the oil and gas sector."
    },
    {
        src: GalleryTwo,
        alt: "Gallery Two",
        title: "Name or Nature of the Event",
        description: "Gallery showcasing our latest projects and innovations in the oil and gas sector."
    },
    {
        src: GalleryThree,
        alt: "Gallery Three",
        title: "Name or Nature of the Event",
        description: "Gallery showcasing our latest projects and innovations in the oil and gas sector."
    },
    {
        src: GalleryFour,
        alt: "Gallery Four",
        title: "Name or Nature of the Event",
        description: "Gallery showcasing our latest projects and innovations in the oil and gas sector."
    },
    {
        src: GalleryFive,
        alt: "Gallery Five",
        title: "Name or Nature of the Event",
        description: "Gallery showcasing our latest projects and innovations in the oil and gas sector."
    }
];

const GalleryComponent = () => {
    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="h-auto w-full py-24 bg-white">
            <div className="container mx-auto px-8">

                {/*==== Title ====*/}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-0.5 w-12 bg-appSecondary-dark" />
                    <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                        OUR GALLERY
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-left text-gray-900 tracking-wide leading-tight">
                    Oil and Gas Innovators: Driving<br />Progress in the Industry
                </h2>

                {/*==== Slider ====*/}
                <div className="mt-10 relative flex items-center justify-center">
                    <div onClick={prevSlide} className="h-10 w-10 flex items-center justify-center absolute left-0 bg-white border border-gray-200 hover:border-green-500 hover:bg-green-500 cursor-pointer z-10">
                        <AltArrowLeft />
                    </div>

                    <div className="h-auto w-full plx-7 flex gap-6 justify-center relative">
                        {/* Previous image (left of center) */}
                        {galleryImages[current - 1 < 0 ? galleryImages.length - 1 : current - 1] && (
                            <div className="mx-auto transition-all duration-300 opacity-60 scale-95 hidden md:block relative cursor-pointer">
                                <img
                                    src={galleryImages[current - 1 < 0 ? galleryImages.length - 1 : current - 1].src}
                                    alt={galleryImages[current - 1 < 0 ? galleryImages.length - 1 : current - 1].alt}
                                    className="w-full h-[360px] md:w-[520px] rounded-2xl object-cover"
                                />
                                <div className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
                                    }}
                                />
                            </div>
                        )}

                        {/* Current image (center) */}
                        <div className="mx-auto transition-all duration-300 opacity-100 relative rounded-2xl cursor-pointer group overflow-hidden z-10">
                            <img
                                src={galleryImages[current].src}
                                alt={galleryImages[current].alt}
                                className="w-full h-[360px] md:w-[520px] scale-100 rounded-2xl object-cover transition-transform duration-1000 group-hover:scale-120"
                            />
                            <div className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)"
                                }}
                            />

                            {/* Description slides in on hover */}
                            <div className="absolute left-0 bottom-0 w-full px-6 pb-6">
                                <div className=" text-white rounded-xl py-3 px-4
                                    translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                    transition-all duration-1000"
                                >
                                    <h4 className="font-medium text-base">{galleryImages[current].title}</h4>
                                    <p className="mt-2 font-light text-sm">{galleryImages[current].description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Next image (right of center) */}
                        {galleryImages[(current + 1) % galleryImages.length] && (
                            <div className="mx-auto transition-all duration-300 opacity-60 scale-95 hidden md:block relative cursor-pointer">
                                <img
                                    src={galleryImages[(current + 1) % galleryImages.length].src}
                                    alt={galleryImages[(current + 1) % galleryImages.length].alt}
                                    className="w-full h-[360px] md:w-[520px] rounded-2xl object-cover"
                                />
                                <div className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)"
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div onClick={nextSlide} className="h-10 w-10 flex items-center justify-center absolute right-0 bg-white border border-gray-200 hover:border-green-500 hover:bg-green-500 cursor-pointer z-10">
                        <AltArrowRight />
                    </div>
                </div>
                <div className="flex justify-center mt-6 gap-2">
                    {galleryImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`inline-block w-3 h-3 rounded-full ${
                                idx === current ? "bg-green-500" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryComponent;