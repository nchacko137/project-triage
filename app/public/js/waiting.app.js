var app = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: [
      {
        "patientGuid" : "SOME-REALLY-LONG-123",
         "firstName" : "Sylvia",
         "lastName" : "Henderson",
         "dob" : "2012-02-25",
         "sexAtBirth" : "F"
      },
      {
      "patientGuid" : "SOME-REALLY-SHORT-456",
       "firstName" : "James",
       "lastName" : "Marsden",
       "dob" : "2012-06-15",
       "sexAtBirth" : "M"
      },
      {
        "patientGuid" : "SOME-UNIQUE-ABCDE1",
         "firstName" : "Matt",
         "lastName" : "Smith",
         "dob" : "2015-02-15",
         "sexAtBirth" : "M"
      }
    ]
  },
  methods: {
    fetchPatients(){
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {waitingApp.patients = json});
      console.log("This happened quickly");
    }
  },
  created: function(){
    fetchPatients();
  }
})
