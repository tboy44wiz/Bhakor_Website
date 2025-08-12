

const CorporateValueComponent = () => {
    const values = [
        {
            number: "01",
            desc: "Adopting high standards of ethics in all its business actions and practices",
        },
        {
            number: "02",
            desc: "Providing its customers with high quality services, tailor-made to their needs and expectation",
        },
        {
            number: "03",
            desc: "Guaranteeing highly competitive services to its clients",
        },
        {
            number: "04",
            desc: "Engaging a highly skilled personnel supported by an effective organizational structure",
        },
        {
            number: "05",
            desc: "Implementing an ‘equal opportunities’ and ‘environmentally friendly’ policy",
        },
        {
            number: "06",
            desc: "Increasing shareholders’ value.",
        },
    ];

    return (
        <section className="hauto w-full mt-5 lg:mt-12 py-14 bg-[#01411C]">
            <div className="container mx-auto px-5 lg:px-16">
                {/* Title */}
                <div className="flex items-center gap-3">
                    <div className="h-0.5 w-12 bg-white" />
                    <span className="text-white font-semibold text-sm tracking-wider uppercase">
                        CORPORATE VALUES
                    </span>
                </div>
                <h2 className="mt-4 text-2xl md:text-5xl font-bold text-left text-white leading-8 lg:leading-15">
                    To Drive Innovation and Progress in the Oil and Gas Industry
                </h2>

                {/* Values Grid */}
                <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10">
                    {values.map((value) => (
                        <div key={value.number} className="flex items-center gap-6">
                            <h1 className="text-4xl md:text-5xl font-semibold text-white min-w-[48px]">{value.number}</h1>
                            <p className="mt-1 text-white text-left text-base md:text-lg leading-7 ">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateValueComponent;