import mysql from 'mysql2';
import Sequelize from 'sequelize';

const database = new Sequelize('yelp_db', 'student', 'student', {
	host: 'localhost',
	dialect: 'mysql',
});

// database.query("SELECT * FROM user LIMIT 5", { type: Sequelize.QueryTypes.SELECT})
//   .then(users => {
// 		// We don't need spread here, since only the results will be returned for select queries

// 		console.log(users[0]);
//   });

database
	.authenticate()
	.then(() => {
		console.log('success');
	})
	.catch((err) => {
		console.error('err');
	});

export default database;