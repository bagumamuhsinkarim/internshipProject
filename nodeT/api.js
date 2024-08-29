const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/mtos', (req, res)=>{
    client.query(`Select * from mtos`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/mtos/:mto_id', (req, res)=>{
    client.query(`Select * from mto where mto_id=${req.params.month_id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/bills',(req, res)=>{
    client.query('SELECT hospital_list.hospt_name, mtos.mto_id, hospital_list.dates, mtos.patient_Name, mtos.invoice FROM hospital_list JOIN mtos ON hospital_list.mto = mtos.mto_id ORDER BY hospital_list.dates',(err, result)=>{
        if(!err){
            res.send(result.row);
        }
    });
    client.end;
})

app.get('/lastmto',(req, res)=>{
    client.query('SELECT * FROM mtos ORDER BY dates DESC LIMIT 10;', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.delete('/mtosdel/:id', (req, res)=> {
    let insertQuery = `delete from mtos where id=${req.params.id}`
    client.query(insertQuery, (err, result)=>{
    if(!err){
    res.send('Deletion was successful')
    }
    else{ console.log(err.message) }
    })
    client.end;
    })

app.post('/mtogen',(req, res) => {
    const user = req.body;
    console.log(user)

    let insertQuery = `insert into mtos(patient_Name, hospital, dates, staff_name) values('${user.patient_Name}','${user.hospital}', '${user.dates}', '${user.staff_name}')`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('MTO generated!')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/mtoinv', async (req, res) => {
    let user = req.body;
    let updateQuery = 'update mtos set invoice = $1 where mto_id = $2';
    try {
      await client.query(updateQuery, [user.invoice, user.mto_id]);
      res.send('Invoice Update was successful');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Something went wrong');
    } finally {
      client.end;
    }
  });
  
