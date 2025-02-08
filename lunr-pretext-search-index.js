var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-permutations",
  "level": "1",
  "url": "section-permutations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Permutations",
  "body": " Permutations    Bla    "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "section-permutations.html#def-permutation",
  "type": "Définition",
  "number": "1.1.1",
  "title": "",
  "body": "  Bla   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Ce livre a été rédigé avec PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
