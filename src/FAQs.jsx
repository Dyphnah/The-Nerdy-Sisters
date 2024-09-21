import React, { useState } from 'react';
import './FAQs.css'; 

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Are there any long-term contracts?",
            answer: "No, we don’t require long-term contracts. You can choose to continue or discontinue our services at any time without any penalties."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we believe in transparency. There are no hidden fees—what you see is what you pay."
        },
        {
            question: "How does billing work?",
            answer: "Billing is straightforward and based on the plan you select. You’ll receive an invoice at the beginning of each billing cycle."
        },
        {
            question: "Can I switch plans anytime?",
            answer: "Absolutely! You can upgrade or downgrade your plan whenever you need, ensuring you get the support that fits your requirements."
        },
        {
            question: "What types of support are included?",
            answer: "Our support includes access to all our services, with response times tailored to your needs—whether it's same-day responses or within 24 hours."
        },
        {
            question: "How do I get in touch with support?",
            answer: "You can reach our support team via email, phone, or through our website's contact form. We’re here to help!"
        },
        {
            question: "Do you work in different time zones?",
            answer: "Yes, we operate in multiple time zones and can accommodate your schedule to ensure you receive support when you need it."
        },
        {
            question: "What if I’m not satisfied with the service?",
            answer: "Your satisfaction is our priority. If you’re not happy, please reach out to us, and we’ll work to resolve any issues you have."
        }
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faqs-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
