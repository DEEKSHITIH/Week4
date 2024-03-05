// Blog post data object
const blogPost = {
  title: 'The Future of JavaScript',
  author: 'adithya saladi',
  content: 'JavaScript is constantly evolving, and its future is looking brighter than ever...',
  date: 'March 1, 2024',
  tags: ['JavaScript'],
  tag:['webdevelpment']
};


const { title, author, content, ...rest } = blogPost;


const additionalInfo = {
  comments: 15,
  likes: 45
};


const fullPostInfo = { ...rest, ...additionalInfo };


const blogPostTemplate = `
  <article>
    <h1>${title}</h1>
    <p>By ${author}</p>
    <date>${rest.date}</date>
    <div>JavaScript’s Significance:
    JavaScript (JS) is an essential language in the IT industry, widely used for web development.
    It offers versatile features to programmers and plays a crucial role in creating dynamic content on webpages.
    Over 60% of developers use JavaScript, making it one of the most popular languages globally1.
    JavaScript’s Origins:
    In the early 1990s, during the browser wars, Brandan Eich (a programmer at Netscape) invented JavaScript.
    The European Computer Manufacturers’ Association (ECMA) standardized JavaScript, leading to its global success.
    JavaScript’s execution occurs in the client’s browser, making it unique and indispensable1.
    JavaScript’s Evolution:
    JavaScript has come a long way since its inception.
    It supports object-oriented and procedural programming paradigms.
    Features like modules, namespaces, anonymous functions, and prototypal inheritance empower developers.
    Entire applications, including Gmail and Google Maps, are built using JavaScript1.
    Predictions for JavaScript’s Future:
    PWAs (Progressive Web Apps): JavaScript will continue to play a critical role in web development, especially with the rise of PWAs.
    Serverless Computing: As serverless architectures gain prominence, JavaScript’s importance will grow.
    Web Components: JavaScript’s integration with web components will enhance front-end development.
    Machine Learning: JavaScript’s role in machine learning applications will expand2</div>
    <ul>
      ${rest.tags.map(tag => `<li>${tag}</li>`).join('')}
    </ul>
    <button>
    ${rest.tag.map(tag => `<li>${tag}</li>`).join('')}
  </button>
    
  </article>
  `;const blogPostElement = {
  title,
  author,
  content,
  fullPostInfo,
  render() {
    document.body.innerHTML = blogPostTemplate;
  }
};


blogPostElement.render();
