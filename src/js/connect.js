


// connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
//  });


  // async function executeQuery() {
  //     let connection;
  //     try {
  //       connection = await connectToDatabase();
  //       const [rows, fields] = await connection.execute('SELECT * FROM your_table');
  //       console.log('Результаты запроса:', rows);
  //       return rows;
  //     } catch (error) {
  //       console.error('Ошибка выполнения запроса:', error);
  //       throw error;
  //     } finally {
  //       if (connection) {
  //         await connection.end();
  //       }
  //     }
  //   }