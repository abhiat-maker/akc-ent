document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !phone || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    form.reset();
  });
}
