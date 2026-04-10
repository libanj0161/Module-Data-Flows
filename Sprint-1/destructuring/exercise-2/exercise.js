let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function findGryffindor(peopleList) {
  // first loop through the people list
  // find every person whos is Gryffindor house
  const gryffindorPeople = peopleList.filter(({ house }) => {
    return house === "Gryffindor";
  });

  const peopleNames = gryffindorPeople.map(({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  });

  const output = peopleNames.join("\n");
  console.log("People in Gryffindor House", output);
  return output;
}

function findTeachersWithPets(peopleList) {
  // loop through peoples list
  // find teachers with pets
  const teachersWithPets = peopleList.filter(({ occupation, pet }) => {
    return pet && occupation === "Teacher";
  });

  const teachersName = teachersWithPets.map(({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  });

  const output = teachersName.join("\n");
  console.log("Teachers with pets", output);
  return output;
}
