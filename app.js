

const express = require('express')
const morgan = require('morgan')
const { success } = require('./helper.js')
let users = require('./mock-user')
const app = express()
const port = 3000


// middlewares qui affichent en console les requete entrante dans l'api rest
app.use(morgan('dev'))



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






// Ecoute de l'application sur le port 3000
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
