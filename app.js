

const express = require('express')
const morgan = require('morgan')
// const favicon = require('serve-favicon')
const bodyParser = require('body-parser')

const { success, getUniqueId } = require('./helper.js')
let users = require('./mock-user')
const app = express()
const port = 3000


// middlewares qui affichent en console les requete entrante dans l'api rest
// app.use.use(favicon(__dirname,  './favicon_krysto.ico'))
app.use(morgan('dev'))
app.use(bodyParser.json())



// point d'entrée de l'api rest krysto
app.get('/',( req, res) => res.send('🌏🌏🌏🌏 Hello express ! 🌏🌏🌏🌏 '))

// Récuper la liste de tous les uttilisateurs inscrit
app.get('/api/krysto/users/', (req, res) => {
    const message = 'La liste des pokémons a bien été récupérée.'
    res.json(success(message, users)) 
  })


// Récuper un uttilisateur avec son identifiant
app.get(`/api/krysto/users/:id`,( req, res) => {
    const id = parseInt(req.params.id) 
    const user = users.find(user => user.id === id)
    const message = 'La liste des pokémons a bien été récupérée.'
    res.json(success(message, user)) 
})

// Création d'un nouvel uttilisateur
app.post('/api/krysto/users/', (req,res) => {
  const id = getUniqueId(users)
  const userCreated = {...req.body, ...{id: id, created: new Date()}}
  users.push(userCreated)
  const message = `L'uttilisateur ${userCreated.username}`
  res.json(success(message,userCreated))
})

//Modification d'un uttiilisateur
app.put('/api/krysto/users/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const userUpdated = { ...req.body, id:id}
  users = users.map(user => {
    return user.id === id ? userUpdated : user
  })
  const message = `L'uttilisateur ${userUpdated} a bien été modifié.`
  res.json(success(message,userUpdated))
})

// Suppresion d'un uttilisateur


// Ecoute de l'application sur le port 3000
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
