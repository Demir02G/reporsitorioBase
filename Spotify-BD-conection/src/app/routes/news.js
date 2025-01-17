const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();
connection.connect(function (err) {
  if(err)throw err;
  console.log('DB connection established');

})
  app.get('/', (req, res) => {

      res.render('news/index', {

      });
    });


  app.get('/vista1', (req, res) => {

    connection.query('SELECT * FROM vista1', (err, result) => {
      console.log(result);
      res.render('news/vista1', {
        vista1: result
      });
    });
  });

  app.get('/vista2', (req, res) => {

    connection.query('SELECT * FROM vista2', (err, result) => {
      console.log(result);
      res.render('news/vista2', {
        vista2: result
      });
    });
  });

  app.get('/vista3', (req, res) => {

    connection.query('SELECT * FROM vista3', (err, result) => {
      console.log(result);
      res.render('news/vista3', {
        vista3: result
      });
    });
  });

};
