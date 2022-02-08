function aboutMeContents() {
  const aboutMePage = document.querySelector("#aboutMePage");
  if (aboutMePage) {
    const aboutMe = `<div class="container">
                            <div class="row aboutMeContent d-flex align-items-center">
                                <div class="col-12 pl-4 pr-3">
                                    <h3 class="pt-5">About Me</h3>
                                    <p class="mt-5">Hi, and thank you for taking from your time to read a bit about me as a web developer and individual.</p>
                                    <p>Recently, I finished a professional certification in Full Stack-Flex Web Devlopment from Rutgers University. Through this program, I gained expertise in front-end and back-end technologies such as HTML5, CSS, JavaScript (Vanilla, jQuery and Sequelize), MySQL, and MERN (MongoDB, Express, React.js, and Node.js).</p>    
                                    <p>After finishing my certification, I've grown enthusiastic about bringing these skills over to a leading organization where I can grow as a web developer.</p>    
                                    <p>I also have professional experience in the transportation and financial industries. At United Airlines, I participated in different leadership roles where personal relationships, awareness of tight schedules and goals, and business acumen along with a customer first approach were critical to my job. At Santander Puerto Rico, I was the Policies and Procedures Officer where I worked hand in hand with most divisions across the company.</p>    
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
