import { TrendingUp, Users, Star, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "120+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: TrendingUp,
      number: "2M+",
      label: "Leads Generated",
      description: "For our clients"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction"
    },
    {
      icon: Award,
      number: "3+",
      label: "Years Experience",
      description: "In digital marketing"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-[#ffb900] font-semibold text-lg tracking-wide uppercase mb-4 block">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
            Numbers That <span className="text-[#ffb900]">Speak</span>
          </h2>
          <p className="text-xl text-dark-muted max-w-2xl mx-auto">
            We measure our success by the growth we deliver to our clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {stats.map((stat, index) => (
    <div 
      key={index}
      className="text-center group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#ffb900]/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-[#ffb900]/30 transition-all duration-300 group-hover:scale-110">
        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#ffb900]" />
      </div>

      {/* Number */}
      <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-dark-foreground mb-1 group-hover:text-[#ffb900] transition-colors duration-300">
        {stat.number}
      </div>

      {/* Label */}
      <div className="text-sm sm:text-base lg:text-xl font-semibold text-[#ffb900] mb-1">
        {stat.label}
      </div>

      {/* Description */}
      <div className="text-xs sm:text-sm lg:text-base text-gray-700">
        {stat.description}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default StatsSection;