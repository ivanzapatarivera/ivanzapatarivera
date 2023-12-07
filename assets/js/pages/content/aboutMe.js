function aboutMeContents() {
  const aboutMePage = document.querySelector("#aboutMePage");
  if (aboutMePage) {
    const aboutMe = `<div class="container">
                            <div class="row aboutMeContent d-flex align-items-center">
                                <div class="col-12 pl-4 pr-3">
                                    <h3 class="pt-5">About Me</h3>
                                    <p class="mt-5">Hi, and thank you for taking from your time to read a bit about me as a web developer and individual.</p>
                                    <p>I\'m a Professional Certified Full Stack-Flex Web Developer from Rutgers University with three years of experience and expertise in front-end and back-end programming languages such as JavaScript (including React, Angular, Node, and Express), Python (including Django, Flask, and Data Analysis\/Analytics tools) and Java, Database Query Languages (like SQL, MySQL, SQLite), and Application Programming Interfaces (API's) such as RESTful APIs and gRPC.</p>    
                                    <p>After finishing my certification at Rutgers, I\'ve worked with Fortune 500 Clients developing applications powered by Artificial Intelligence. I've specialized in Contact Center Artificial Intelligence (CCAI), VertexAI (for GenAI), and Datastores. As part of my professional development, I've obtained a Google\'s Associate Cloud Engineer Certification.</p>    
                                    <p>I also have experience in the Transportation and Financial industries. At United Airlines, I participated in different leadership roles where personal relationships, awareness of tight schedules and goals, and business acumen along with a customer first approach were critical to my job. At Santander Puerto Rico, I was the Policies and Procedures Officer where I worked hand in hand with most divisions across the company.</p>    
                                    <p>I invite you to visit my GitHub, browse through my profile and see different projects I've worked with.</p>    
                                    <p class="mb-4">Yours truly,</p>
                                    <p class="pb-5 signature">Iv&aacute;n J. Zapata-Rivera</p>
                                </div>
                            </div>
                        </div>`;
    aboutMePage.insertAdjacentHTML("afterbegin", aboutMe);
    return;
  }
}

export { aboutMeContents };
