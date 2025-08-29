import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results timeline varies by service: SEO typically shows improvements in 3-6 months, PPC campaigns can generate leads within days, and social media growth usually becomes noticeable within 4-8 weeks. We provide regular reports to track progress."
    },
    {
      question: "What makes Pixel Media different from other agencies?",
      answer: "We combine data-driven strategies with creative execution, offer transparent reporting, maintain dedicated account management, and focus on ROI-driven results. Our team stays current with latest digital trends and platform updates."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, and enterprise companies. Our strategies are tailored to each client's budget, goals, and industry requirements. We believe every business deserves professional digital marketing."
    },
    {
      question: "What's included in your website design service?",
      answer: "Our website design includes custom design, mobile responsiveness, SEO optimization, content management system, security setup, performance optimization, and 3 months of free maintenance and support."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track KPIs specific to your goals: website traffic, conv ersion rates, lead generation, ROI, brand awareness metrics, and sales attribution. Monthly reports include actionable insights and recommendations for optimization."
    },
    {
      question: "Can you help with social media content creation?",
      answer: "Absolutely! We create custom visual content, write engaging captions, develop content calendars, produce videos and graphics, and manage posting schedules across all major platforms including Instagram, Facebook, TikTok, and LinkedIn."
    }
  ];

  return (
    <section className="py-32 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#ffb900]  font-semibold text-lg tracking-wide uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Frequently Asked <span className="text-[#ffb900]">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our digital marketing services
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-soft border-0 px-6 hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#ffb900] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;