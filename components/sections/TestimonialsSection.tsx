import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/lib/data";

export async function TestimonialsSection() {
  const featuredTestimonials = testimonials.filter((t) => t.featured);

  if (!featuredTestimonials || featuredTestimonials.length === 0) {
    return null;
  }

  // Map testimonials to AnimatedTestimonials format
  const formattedTestimonials = featuredTestimonials.map((testimonial) => ({
    quote: testimonial.testimonial || "",
    name: testimonial.name || "Anonymous",
    designation: testimonial.company
      ? `${testimonial.position} at ${testimonial.company}`
      : testimonial.position || "",
    // Use placeholder image
    src:
      testimonial.image ||
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
  }));

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            What people say about working with me
          </p>
        </div>

        <AnimatedTestimonials
          testimonials={formattedTestimonials}
          autoplay={true}
        />
      </div>
    </section>
  );
}
