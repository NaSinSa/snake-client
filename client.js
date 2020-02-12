
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Enter to Win')
    conn.write('Name: WIN')
  });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   }, 300);
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   }, 500);
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   }, 700);
  // });

  for (let i = 0; i < 10; i++) {
    conn.on('connect' , () => {
      setTimeout(() => {
        conn.write("Move: left")
      }, i)
    })
  }

  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}



module.exports = { connect };