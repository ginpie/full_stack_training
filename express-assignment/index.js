const express = require("express");
const app = express();

// jsonfile package, w/r json file
const jsonfile = require("jsonfile");
const currentPath = process.cwd();
const file = `${currentPath}/people.json`;

function timeMiddleWare(req, res, next) {
  console.log("date added");
  next();
}

app.use(timeMiddleWare);

app.get("/people", (req, res, next) => {
  const time = new Date();
  res.setHeader("received-time", time.toLocaleString());
  const { name } = req.query;
  jsonfile
    .readFile(file)
    .then((obj) => {
      const size = Object.keys(obj).length;
      // get all people
      if (!size) {
        res.send("no person ever created");
      }
      if (name) {
        Object.values(obj).forEach((values) => {
          console.log(values.name, name);
          console.log(values.name === name);
          if (values.name == name) {
            res.send(`person found: ${name}`);
          }
        });
        res.send("person not found");
      }
      // get a person by name
      else {
        console.dir(obj);
        console.log(`There are ${size} people in total.`);
        res.send(obj);
      }
    })
    .catch((error) => console.error(error));
});

// create a person
app.post("/people/:name", (req, res, next) => {
  const { name } = req.params;
  const obj = { name: name };
  jsonfile
    .readFile(file)
    .then((obj) => {
      people = obj;
      const size = Object.keys(obj).length;
      obj[size + 1] = { name: name };
      jsonfile
        .writeFile(file, obj)
        .then((res) => {
          console.log(obj);
          console.log("Write complete");
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));

  res.send(`Person created: ${name}`);
});

app.listen(3000);
