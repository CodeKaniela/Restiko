// AUTH

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyKFGV7w853FKD35'
});
var base = Airtable.base('appwi10nothJfc4sd');

// LIST

function listRecord() {
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Date'));
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}



// CREATE



function createRestiko() {
  
  var note = $('#dayNote').val();
  var integer = parseInt(note, 10);

    base('RESTIKO').create({
        "Date": $('#laDate').val(),
        "Ce que j'ai aimé": $('#dayLike').val(),
        "Ce que j'ai fait": $('#dayResume').val(),
        "Ce que j'ai appris": $('#dayLearn').val(),
        "Ce que j'ai utilisé de nouveaux": $('#dayNew').val(),
        "Problématiques  rencontrées": $('#dayProb').val(),
        "Quels sont les objectifs ?": $('#dayObject').val(),
        "Qu'est-ce qui m'a manqué ?": $('#dayMore').val(),
        "Qu'est-ce que tu ferais à la place du formateur ?": $('#dayTeach').val(),
        "Nom": {
          "id": "usr40kkZIw0e34k6c",
          "email": "kaniela.taora@hotmail.fr",
          "name": "Kaniela Taora"
        },
        "Note": integer
      }, function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      });
}

function btn1() {
  $("#form1").hide();
  $("#form2").show();
}
function btn2() {
  $("#form2").hide();
  $("#form3").show();
}
function btn3() {
  $("#form3").hide();
  $("#form4").show();
}
function btn4() {
  $("#form4").hide();
  $("#form5").show();
}
function btn5() {
  $("#form5").hide();
  $("#form6").show();
}
function btn6() {
  $("#form6").hide();
  $("#form7").show();
}
function btn7() {
  $("#form7").hide();
  $("#form8").show();
}
function btn8() {
  $("#form8").hide();
  $("#form9").show();
}
function btn9() {
  $("#form9").hide();
  $("#returnScreen").show();
}
function goHome() {
  $("#form9").hide();
  $("#returnScreen").hide();
  $("#form1").show();
  $("#dayNote, #dayLike, #dayTeach, #dayLearn, #dayMore, #dayObject, #dayResume, #dayProb, #dayNew, #laDate")[0].reset()
}

function yestiko() {

  base('RESTIKO').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Date'));
        $("#yesterdayRestiko").html('<h2>'+ record.get('Date') +'</h2>' +
          '<p>'+ record.get("Ce que j'ai aimé")+' <br> '+ record.get("Ce que j'ai fait") +' <br> '+ record.get("Ce que j'ai appris") +' <br> '+ record.get("Ce que j'ai utilisé de nouveaux")+'</p>');
    });
});

}

yestiko();