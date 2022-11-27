fetch("/faq.json")
.then(response => response.json())
.then(structuredDataText => {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = structuredDataText;
  document.head.appendChild(script);
  const about = document.getElementById("about");
  const faqs = structuredDataText.mainEntity;
  faqs.forEach(e => {
    const question = document.createElement('h1');
    const answer = document.createElement('p');
    question.textContent = e.name;
    answer.textContent = e.acceptedAnswer.text;
    about.appendChild(question);
    about.appendChild(answer);
    about.appendChild(document.createElement('br'));
  })
});
