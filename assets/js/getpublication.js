/**
 * Returns formatted pubmed citation.
 *
 * @param {id} Pubmed identifier.
 * @return Formatted pubmed citation.
 * @customfunction
 */
function pubmed(id) {
  // Special thanks to http://www.alexhadik.com/blog/2014/6/12/create-pubmed-citations-automatically-using-pubmed-api
  var content =  UrlFetchApp.fetch("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=" + id + "&retmode=json")
  summary = JSON.parse(content)

  var title = summary.result[id].title;
  var journal = summary.result[id].fulljournalname;
  var volume = summary.result[id].volume;
  var issue = summary.result[id].issue;
  var citation = "";
  var pub_date = summary.result[id].pubdate;
  var pages = summary.result[id].pages;

  var authors = "";
  for(author in summary.result[id].authors){
    authors+=summary.result[id].authors[author].name+', ';
  }

  var citation = "<p><strong>" + title + "</strong><br />" +
                 authors + "<br />" +
                 "(" + pub_date + ") <em>" + journal + "</em> " +
                 volume + " (" + issue + ") " + pages + "</p>";


  return citation
}
