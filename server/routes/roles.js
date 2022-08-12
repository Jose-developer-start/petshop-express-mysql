import { Router } from "express";
import connectMYSQL from "../connect.js";

const router = Router();
//GET DATA ALL
router.get('/roles', (req,res)=>{
    connectMYSQL.query('SELECT * FROM roles', (err,results)=>{
        if(err) res.status(500).send(err)

        res.json(results)
    })
})
//GET DATA FILTER ID
router.get('/roles/:id', (req,res)=>{
    connectMYSQL.query('SELECT * FROM roles WHERE id=?',[req.params.id], (err,results)=>{
        if(err) res.status(500).send(err)

        res.status(200).json(results)
    })
})
//POST DATA INSERTED
router.post('/roles', (req,res)=>{
    connectMYSQL.query('INSERT INTO roles set ?',[req.body], (err,results)=>{
        if(err) res.status(500).send(err)

        res.status(201).send('created rol')
    })
})

//PUT DATA UPDATE
router.put('/roles/:id', (req,res)=>{
    connectMYSQL.query('UPDATE roles set ? WHERE id=?',[req.body,req.params.id], (err,results)=>{
        if(err) res.status(500).send(err)

        res.status(200).send('updated rol')
    })
})

//DELETE DATA

//PUT DATA UPDATE
router.delete('/roles/:id', (req,res)=>{
    connectMYSQL.query('DELETE FROM roles WHERE id=?',[req.params.id], (err,results)=>{
        if(err) res.status(500).send(err)

        res.status(200).send('delete rol')
    })
})

export default router;