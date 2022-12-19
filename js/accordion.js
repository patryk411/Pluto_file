let buttonFaqContainer = document.querySelectorAll('.container-block-faq button');
 
function toggleAccordion() {
  const buttonFaq = this.getAttribute('aria-expanded');
  
  for (let i = 0; i < buttonFaqContainer.length; i++) {
    buttonFaqContainer[i].setAttribute('aria-expanded', 'false');
  }
  
  if (buttonFaq == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

buttonFaqContainer.forEach(buttonFaq => buttonFaq.addEventListener('click', toggleAccordion));