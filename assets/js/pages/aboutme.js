function aboutMeContents() {
    const aboutMePage = document.querySelector("#aboutMePage");
    if(aboutMePage) {
        const aboutMe = `<div class="container">
                            <div class="row aboutMeContent d-flex align-items-center">
                                <div class="col-12 col-md-6 aboutMeContentLeftSide"></div>
                                <div class="col-12 col-md-6 pl-4 pr-3">
                                    <h3 class="pt-5">About Me</h3>
                                    <p class="mt-5">Hi, and thank you for taking from your time to read a bit about me as a web developer and individual.</p>
                                    <p>Recently, I finished a professional certification in Full Stack-Flex Web Devlopment from Rutgers University. Through this program, I've earned knowledge on front-end and back-end technologies such as HTML5, CSS, JavaScript (Vanilla, jQuery and Sequelize), MySQL, and MERN (MongoDB, Express, React.js, and Node.js). I've coded online and offline apps using these technologies, which are available in my portfolio.</p>    
                                    <p>After finishing my certification, I've grown enthusiastic about bringing these skills over and join a leading organization where I can grow as a web developer.</p>    
                                    <p>My professional background is pretty diverse, with experience in the transportation and financial industries. Prior to joining Rutger's University, I had different roles at United Airlines where interpersonal skills, awareness to tight schedules, and business acumen were important along with a customer first approach. Before joining United's team, I was part of the Organization Department (under Means) at Santander Puerto Rico where I had the role of Policies and Procedures Officer working hand in hand with most divisions across the company.</p>    
                                    <p>I invite you to visit my GitHub, browse through my profile and see different projects I've worked with.</p>    
                                    <p class="mb-5">Yours truly,</p>
                                    <p class="pb-5 signature">Iv&aacute;n J. Zapata-Rivera</p>
                                </div>
                            </div>
                        </div>`
        aboutMePage.insertAdjacentHTML("afterbegin", aboutMe)
    }
}

export { aboutMeContents }