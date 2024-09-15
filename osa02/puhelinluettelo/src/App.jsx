import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Uusi_henkilo from './components/Uusi_henkilo'
import Henkilot from './components/Henkilot'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

  }, [])

  const addName = (event) => {
    event.preventDefault()
    
    const filteredPersons = persons.filter(person => person.name === newName)
    if (filteredPersons.length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }
  
    const nameObject = {
      name: newName,
      number: newNumber
    }
  
    personService
      .create(nameObject) 
        .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setErrorMessage(
          `Added ${newPerson.name}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const handleDelete = (id, name) => {  
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setErrorMessage(
            `Deleted ${name}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <h3>Add a new</h3>

      <Uusi_henkilo
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}       
      />

      <h3>Numbers</h3>

      <Henkilot persons={persons} handleDelete={handleDelete} />
    </div>
  )

}

export default App