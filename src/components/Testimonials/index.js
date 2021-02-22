import React from "react"

import {
  TestimonialsContainer,
  TestimonialsBg,
  TestimonialsImageBg,
  TestimonialsHeader,
  TestimonialsH1,
  TestimonialsH2,
  TestimonialsP,
  TestimonialsWrapper,
  TestimonialsCard,
  TestimonialsIcon,
  TestimonialsIconContainer,
} from "./TestimonialsElements"

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsBg>
        <TestimonialsImageBg></TestimonialsImageBg>
      </TestimonialsBg>
      <TestimonialsHeader>
        <TestimonialsH1>What Customers Say</TestimonialsH1>
      </TestimonialsHeader>
      <TestimonialsWrapper>
        <TestimonialsCard>
          <TestimonialsIconContainer>
            <TestimonialsIcon
              src="./images/testimonial-1.jpg"
              alt="testimonialIcon"
            />
          </TestimonialsIconContainer>

          <TestimonialsH2>Crystal Buckner</TestimonialsH2>
          <TestimonialsP>
            "Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services."
          </TestimonialsP>
        </TestimonialsCard>
        <TestimonialsCard>
          <TestimonialsIconContainer>
            <TestimonialsIcon
              src="./images/testimonial-3.jpg"
              alt="testimonialIcon"
            />
          </TestimonialsIconContainer>
          <TestimonialsH2>Stanley Armisen</TestimonialsH2>
          <TestimonialsP>
            "Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services."
          </TestimonialsP>
        </TestimonialsCard>
        <TestimonialsCard>
          <TestimonialsIconContainer>
            <TestimonialsIcon
              src="./images/testimonial-2.jpg"
              alt="testimonialIcon"
            />
          </TestimonialsIconContainer>
          <TestimonialsH2>Summer Wakefield</TestimonialsH2>
          <TestimonialsP>
            "Testimonials are short quotes from people who love your brand. It's
            a great way to convince customers to try your services."
          </TestimonialsP>
        </TestimonialsCard>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
