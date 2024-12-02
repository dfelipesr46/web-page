const chistes = [
    "¿Qué hace un elfo por las noches? ¡Elf-it para la fiesta!",
    "¿Cómo se despiden los renos? ¡Adios, cuernos!",
    "¿Por qué Santa Claus nunca dice chistes? Porque siempre lo dejan con la risa en la bolsa.",
    "¿Qué canta Santa Claus mientras reparte regalos? ¡Ho-ho-hope you like it!",
    "¿Cómo se llaman los padres de Santa Claus? ¡Sus-padres-nicolas!",
];

function mostrarChiste() {
    const randomIndex = Math.floor(Math.random() * chistes.length);
    document.getElementById("chiste").textContent = chistes[randomIndex];
}
