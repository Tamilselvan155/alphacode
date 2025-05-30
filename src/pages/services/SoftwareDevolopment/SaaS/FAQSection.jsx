import { useState } from "react";

export default function FAQSection() {
    const faqData = [
        {
            question: "What is SaaS product development?",
            answer:
                "SaaS (Software as a Service) product development involves creating cloud-hosted software applications delivered via the web. Users access it through a browser without installing anything locally. Examples include Salesforce and Google Workspace.",
        },
        {
            question: "How can I hire SaaS developers for my project?",
            answer:
                "You can hire SaaS developers through Tekvian's dedicated team service, or via freelance platforms, agencies, or staffing firms specializing in SaaS.",
        },
        {
            question: "What are SaaS consulting services and how they can benefit my business?",
            answer:
                "SaaS consulting services help businesses plan, design, develop, and scale SaaS products efficiently, saving time and ensuring best practices are followed.",
        },
        {
            question: "How long does it take to develop a SaaS application?",
            answer:
                "Typical SaaS projects can take between 3 to 9 months depending on complexity, features, and team size. Tekvian helps you speed up time to market.",
        },
        {
            question: "What technologies are used in SaaS development?",
            answer:
                "Popular technologies include AWS, Azure, Google Cloud, Node.js, React.js, Python, Kubernetes, and various microservices and DevOps tools.",
        },
        {
            question: "Is post-launch support available for SaaS products?",
            answer:
                "Yes! Ongoing maintenance, scaling, feature updates, and technical support are critical parts of SaaS success and are included in Tekvian’s services.",
        },
        {
            question: "Can you migrate an existing app into a SaaS model?",
            answer:
                "Absolutely. Legacy applications can be modernized and converted into multi-tenant SaaS models for better scalability and flexibility.",
        },
        {
            question: "What are the pricing models for SaaS products?",
            answer:
                "Common pricing models include subscription-based, pay-as-you-go, freemium, and tiered pricing depending on the features and customer base.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 mb-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-700 mb-12 text-sm sm:text-base">
                    Got Questions? Here are the answers to some of the FAQs you might find helpful. Don’t hesitate to contact us with any other query.
                </p>

                <div className="space-y-6 text-left">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full text-left focus:outline-none"
                            >
                                <span
                                    className={`font-semibold text-sm sm:text-base ${
                                        openIndex === index ? "text-blue-600" : "text-gray-800"
                                    }`}
                                >
                                    {faq.question}
                                </span>
                                <span className="text-xl sm:text-2xl text-gray-400">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
