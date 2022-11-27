fetch("/faq.json")
.then(response => response.json())
.then(structuredDataText => {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(structuredDataText);
  document.head.appendChild(script);
  const about = document.getElementById("faq");
  const faqs = structuredDataText.mainEntity;
  faqs.forEach(e => {
    const question = document.createElement('h2');
    const answer = document.createElement('p');
    question.textContent = e.name;
    answer.innerHTML = e.acceptedAnswer.text;
    question.onclick = () => { 
      answer.style.display = `${answer.style.display == "none" ? "block" : "none"}`
    };
    about.appendChild(question);
    about.appendChild(answer);
    about.appendChild(document.createElement('br'));
  })
});
