const UserData = [
	"MERGE (:USER { name: 'Mukul', email: 'mukul.k@gmail.com' })",
  "MERGE (:USER { name: 'Naren', email: 'naren.av@gmail.com' })",
  "MERGE (:USER { name: 'Dinesh', email: 'dinesh.op@gmail.com' })",
  "MERGE (:USER { name: 'Nakul', email: 'nakul.sehgal@gmail.com' })",
  "MERGE (:USER { name: 'Shalini', email: 'shalini.s@gmail.com' })",
  "MERGE (:USER { name: 'Priyanka', email: 'priyanka.k@gmail.com' })",
  "MERGE (:USER { name: 'Simran', email: 'simran.k@gmail.com' })",
  "MERGE (:USER { name: 'Ayer', email: 'ayer.swami@gmail.com' })",
  "MERGE (:USER { name: 'Vankam', email: 'vankam.rao@gmail.com' })",
  "MERGE (:USER { name: 'Anshul', email: 'anshul.s@gmail.com' })",
  "MERGE (:USER { name: 'Vrushik', email: 'vrushik.k@gmail.com' })",
  "MERGE (:USER { name: 'Romi', email: 'rumi.op@gmail.com' })",
  "MERGE (:USER { name: 'Bhagyashree', email: 'bhagya.k@gmail.com' })",
  "MERGE (:USER { name: 'HP', email: 'hp.k@gmail.com' })",
  "MERGE (:USER { name: 'Sam', email: 'sam.k@gmail.com' })",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'naren.av@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'dinesh.op@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'nakul.sehgal@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'shalini.s@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'priyanka.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'simran.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'ayer.swami@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'vankam.rao@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'anshul.s@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'vrushik.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'bhagya.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
  "MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'hp.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
	"MATCH (user1:USER { email: 'mukul.k@gmail.com'}), (user2:USER { email:'sam.k@gmail.com'}) CREATE (user1) -[:FOLLOWS]->(user2)",
];
export default UserData;