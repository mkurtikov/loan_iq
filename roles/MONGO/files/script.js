db.getCollection('documents')
.find({"url": /fblqa.develop.fcbt/})
.forEach(function(e,i) {e.url=e.url.replace("fblqa.develop.fcbt", "fblenkedevbe.develop.fcbt");
db.getCollection('documents').save(e);
});
