import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
 const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Startup",
    role: "CEO",
    content: "Pixel Media transformed our online presence with their Website & App Design service. Our website traffic increased by 300% and our conversion rate doubled within 3 months.",
    rating: 5,
    image: "https://thisrareearth.com/wp-content/uploads/2022/10/100-Hiking-Captions-and-Quotes-for-Instagram-10.jpg"
  },
  {
    name: "Ahmed El Mansouri",
    company: "E-commerce Store",
    role: "Founder",
    content: "Their Social Media Management strategy boosted our brand awareness tremendously. We went from 500 to 50K followers in just 6 months!",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iqS-wAK2-VxyP4SmBTeDD14CuGuAqjJntg&s"
  },
  {
    name: "Aisha Rochdi",
    company: "Beauty Brand",
    role: "Marketing Director",
    content: "The Content Creation & Strategy service is exceptional. Every piece of content they produce drives engagement and converts viewers into customers.",
    rating: 5,
    image: "https://media.istockphoto.com/id/923459510/photo/woman-in-a-burka-burqa-walking-over-a-middle-eastern-desert-during-sunset.jpg?s=612x612&w=0&k=20&c=lJd4vHckcq0f_pHewir5lafbrLks1qaLTFGgG04HLBg="
  }
  
];

  return (
    <section className="py-32 px-6 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-[#ffb900] font-semibold text-lg tracking-wide uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            What Our <span className="text-[#ffb900]">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-0 shadow-medium bg-card relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s avatar`} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ffb900] text-[#ffb900]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#ffb900]/80 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;