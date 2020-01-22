var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyR6QkGlczrf68ef'
});
var base = Airtable.base('appMlMxMRBYpTyhSr');

function recupInfoClientParticulier(){
    $("#livraisonListe").html("");
      base('Table 1').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
          $("#listVeille").prepend(
            '<div class="col-12">'+
            '<div class="card mb-3 rounded50">'+
            '<button class="btn continueBtn rounded-pill" type="button" data-toggle="collapse" data-target="#'+record.id+'"'+
                'aria-expanded="false" aria-controls="'+record.id+'">'+record.get("Date")+'</button>'+
        '<div class="collapse" id="'+record.id+'">'+
            '<div class="card-body p-5">'+
                '<p class="d-none">'+record.get("Coder")+'</p>'+
                '<p class="card-text font-weight-bold">'+record.get("Subject")+'</p>'+
                '<p class="card-text">'+record.get("Links")+'</p>'+
                '<p class="card-text">'+record.get("Synthesis")+'</p>'+
                '<p class="card-text">'+record.get("Comment")+'</p>'+
            '</div>'+
        '</div>'+
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