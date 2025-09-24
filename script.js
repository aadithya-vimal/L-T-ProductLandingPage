// Testimonials data (could be loaded from server or JSON file)
const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This product changed my life! Highly recommended.",
    title: "Entrepreneur"
  },
  {
    name: "John Smith",
    feedback: "Excellent customer service and outstanding results.",
    title: "Tech Blogger"
  },
  {
    name: "Emily Chen",
    feedback: "A must-have for anyone looking for quality and reliability.",
    title: "Designer"
  }
];

// Render testimonials
$(function() {
  const $list = $('#testimonial-list');
  testimonials.forEach(t => {
    $list.append(`
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <p class="card-text">"${t.feedback}"</p>
            <h6 class="card-subtitle mb-2 text-muted">- ${t.name}, <span class="fst-italic">${t.title}</span></h6>
          </div>
        </div>
      </div>
    `);
  });

  // Contact form handler
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    $('#formMessage').text('Thank you for contacting us! We will get back to you soon.').css('color', '#3358e0');
    this.reset();
  });
});
