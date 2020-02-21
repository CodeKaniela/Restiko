var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: ''
});
var base = Airtable.base('appwi10nothJfc4sd');



function recupInfoClientParticulier(){
    $("#livraisonListe").html("");
      base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            date = record.get("Date");
            date1 = new Date(date);
            date2 = date1.toDateString();
          $("#listRestiko").prepend(
            '<div class="col-5 animated jackInTheBox  p-5 mb-4 rounded shadow-lg">'+
                '<h4>RESTIKO of '+date2+'</h4>'+
                '<h5><u>Ce que j\'ai fait :</u></h5>'+
                '<p>'+record.get("Ce que j\'ai fait")+'</p>'+
                '<h5><u>Ce que j\'ai aimé :</u></h5>'+
                '<p>'+record.get("Ce que j\'ai aimé")+'</p>'+
                '<h5><u>Ce que j\'ai appris :</u></h5>'+
                '<p>'+record.get("Ce que j\'ai appris")+'</p>'+
                '<h5><u>Ce que j\'ai utilisé nouveaux :</u></h5>'+
                '<p>'+record.get("Ce que j\'ai utilisé de nouveaux")+'</p>'+
                '<h5><u>La problématique :</u></h5>'+
                '<p>'+record.get("Problématiques rencontrées")+'</p>'+
                '<h5><u>Les objectifs :</u></h5>'+
                '<p>'+record.get("Quels sont les objectifs ?")+'</p>'+
                '<h5><u>J\'aurais voulu :</u></h5>'+
                '<p>'+record.get("Qu'est-ce qui m'a manqué ?")+'</p>'+
                '<h5><u>Un message pour le formateur :</u></h5>'+
                '<p>'+record.get("Qu'est-ce que tu ferais à la place du formateur ?")+'</p>'+
            '</div>'
          )
            
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  
    }
  
    recupInfoClientParticulier();
