var xhr = new XMLHttpRequest();

var url =
  "file:///D:/6._Development/JavaScript/assignment/healthArticle/health_article.json";

xhr.open("GET", url, true);

xhr.responseType = "json";

/*
1. var articles = xhr.response.articles; 
== >to retrieve the articles array from the JSON response.

2. var articlesDiv = document.getElementById('articles'); 
==> to retrieve the HTML element with the ID 'articles' 
where the fetched content will be displayed.
*/
xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById("articles");

  articles.forEach(function (article) {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    var idArt = document.createElement("h2");
    idArt.textContent = article.id;

    var title = document.createElement("h2");
    title.textContent = article.title;

    var Author = document.createElement("h2");
    Author.textContent = article.author;

    var dat = document.createElement("p");
    dat.textContent = article.date;

    // var description = document.createElement("p");
    // description.textContent = article.description;

    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";

    var waysList = document.createElement("ul");
    article.content.forEach(function (way) {
      var listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    var benefitsList = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      var listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(idArt);
    articleDiv.appendChild(title);
    articleDiv.appendChild(Author);
    articleDiv.appendChild(dat);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
};
xhr.send();
/*
  1. Create HTML elements dynamically for example, <div>, <h2>, <p>, <h3>, <ul>, <li> 
  for each article's title, description,ways_to_achieve,
   and benefits using createElement DOM method as follows:
//code
var articleDiv = document.createElement('div');

2. Populate these HTML elements with corresponding content from
 the fetched JSON data as follows:

//code
articleDiv.classList.add('article');

3. Attach these elements to the articlesDiv 
    to display each article's details on the webpage as follows:

//code 
articleDiv.appendChild(title);
  */
