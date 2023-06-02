let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

//Jorge adelanta a Robertp
corredores.splice(2,1);
corredores.splice(0,0, "Jorge");

//Ramiro adelanta a Jorge
corredores.splice(3,1);
corredores.splice(0,0, "Ramiro");

//Roberto se retira
corredores.splice(2,1);

// Andrea baja una posición
corredores.splice(2,1);
corredores.splice(3,0, "Andrea");

//Jose obtiene el 5to lugar

corredores.splice(4,0, "Jose")


console.log(corredores);

corredores