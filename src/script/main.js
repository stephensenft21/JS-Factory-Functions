const doctorsName = (name, address, specialty) => ({

    "name": name,
    "address": address,
    "specialty": specialty



})
console.log(doctorsName("tom","213 test address", " eye doctor"))



const animal = (petName, petBreed) => ({
    "name": petName,
    "breed": petBreed
})

let pet1 = ("Tom","Boxer")
let pet2 = ("Harry", "Bulldog")
let pet3 = ("Ralf", "Pitbull")

const BowWowKennels = []

BowWowKennels.push(pet1, pet2, pet3)

console.log(BowWowKennels)




//JumpStop Records works with Funk and Rap artists
let jumpstop= (genre, name,age) => ({
  "genre": genre,
  "Name": name,
  "age": age
})

//Chatten Records works with Country and Bluegrass artists.
let chattenRecords = ( genre, name, age) => ({
    "genre": genre,
  "Name": name,
  "age": age
})

//Polar Records works with Pop artists.
let polarRecords = ( genre, name, age) => ({
"genre": genre,
  "Name": name,
  "age": age
})

//Chatten Records
const artist1 = ("Bruce Atkins", "Country", "23"  )
//Polar Records
const artist2 = ("Jenson Brown", "Pop", "20" )
//JumpStop Records
const artist3 = ("Dre Funkz", "Funk", "25")
//JumpStop Records
const artist4 = ("Dusta Grimes", "Rap", "21")
//Chatten Records
const artist5 = ("Bartholomew Danielson", "Bluegrass", "23" )
//Chatten Records
const artist6 = ("Avilee Dallas", "Country", "19")
//Polar Records
const artist7 = ("Austin Kinkaid", "Pop", "22")
//JumpStop Records
const artist8 = ("Loyonce Branis", "Rap", "27")



jumpstop.push(artist3,artist4,artist8)
chattenRecords.push(artist1,artist5,artist6,)
polarRecords.push(artist7,artist2,)