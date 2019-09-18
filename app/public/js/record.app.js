var app = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients(){
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => {waitingApp.patients = json});
      console.log("This happened quickly");
    }
  },
  created: function(){
    fetchPatients();
  }
})
