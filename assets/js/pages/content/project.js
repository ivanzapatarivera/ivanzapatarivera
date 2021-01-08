function projectContents(projects) {
  const projectContents = document.querySelector("#projectContents");
  if (projectContents) {
    projects = `
    <div class="col-12">
    <hr>
    <h4 class="text-center my-2">Projects</h4>
    <hr>

    <div class="row">

      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/photo-log/raw/main/assets/images/screenshot.png"
              class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>PhotoLog</b>
            <hr />
          </div>
        </div>

        This is a Node.js app that will allow the user to log their pictures by location. It's architecture has
        been coded using Multer, GridFS, Mongoose, MongoDB, and API routes.<br />
        <a href="https://photo-logger.herokuapp.com" target="_0">Deployed Application</a><br />
        <a href="https://github.com/ivanzapatarivera/photo-log" target="_0">GitHub Repository</a>
      </div>
            
      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/16_Employee_Directory/raw/master/images/screenshot.png" class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>Employee Directory</b>
            <hr />
          </div>
        </div>

        Employee Directory is a React.js application that allows the user to filter employees by Galaxy and then
        order then alphabetically.<br />
        <a href="https://ivanzapatarivera.github.io/16_Employee_Directory/" target="_0">Deployed Application</a><br />
        <a href="https://github.com/ivanzapatarivera/16_Employee_Directory" target="_0">GitHub Repository</a>
      </div>      
      
      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/15_Online_Offline_Budget_Trackers/raw/master/images/screenshot.png" class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>Budget Tracker</b>
            <hr />
          </div>
        </div>

        This budget tracker is a Node.js that works online and offline with service-worker and will allow the
        user to keep track of expenses and deposits while being online, and when losing connection, the user
        will continue to be able to post transactions that will be added to the database once the page goes back
        online.<br />
        <a href="https://budget-tracker-ijz.herokuapp.com/" target="_0">Deployed Application</a><br />
        <a href="https://github.com/ivanzapatarivera/15_Online_Offline_Budget_Trackers" target="_0">GitHub
          Repository</a>
      </div>      
      
      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/14_Workout_Tracker/raw/master/images/screenshot.png" class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>Workout Tracker</b>
            <hr />
          </div>
        </div>

        This is a workout tracker developed with Node.js using MongoDB, Mongoose and Express.<br />
        <a href="https://workout-tracker-ijzr.herokuapp.com/?id=5f5d672ee60edd0017c5a12e" target="_0">Deployed
          Application</a><br />
        <a href="https://github.com/ivanzapatarivera/14_Workout_Tracker" target="_0">GitHub Repository</a>
      </div>
            
      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/10-Employee-Tracker/raw/master/assets/images/screenshot.PNG" class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>Employee Tracker</b>
            <hr />
          </div>
        </div>

        Employee Tracker is a Node.js application that allows the user to update employee, department, and role
        information using CLI and mySQL.<br />
        <a href="https://ivanzapatarivera.github.io/10-Employee-Tracker/" target="_0">Published Readme</a><br />
        <a href="https://youtu.be/Cff3_Yf4Lhg" target="_0">Recorded Demo (YouTube)</a>
      </div>      
      
      <!-- New Card with Project Information -->
      <div class="col-11 col-md-2 my-2 mx-auto pb-4 projectCards bodytext">
        <div class="row">
          <div class="col-12 snapshot pt-3">
            <img src="https://github.com/ivanzapatarivera/08_Engine_Employee_Summary/raw/master/images/screenshot.png" class="snapshotImage" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center" style="font-size: 1.275rem;">
            <hr />
              <b>Engine Employee Summary</b>
            <hr />
          </div>
        </div>

        The Engine Employee Summary is a Node.js app that allows the user to create the profile of each team
        member and add unique properties about each employee depending on their role.<br />
        <a href="https://ivanzapatarivera.github.io/08_Engine_Employee_Summary/" target="_0">Published Readme</a><br />
        <a href="https://www.youtube.com/watch?v=6Sb9HOwhUlE&feature=youtu.be" target="_0">Recorded Demo (YouTube)</a><br />
      </div>
    </div>
  </div>
              `;
    projectContents.insertAdjacentHTML("afterbegin", projects);
  }
}

export { projectContents };
