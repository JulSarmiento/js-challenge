window.addEventListener('load', () => {
    let maxAge = 0, maxName;

    for (let i =1; i <= 3;) {
        const name = prompt(`Ingrese nombre #${i}`);

        if (name === null) {
            return;
        }

        if (!name || !isNaN(name)) {
            alert(`El nombre <${name}> ingresado no es valido.`);
            continue;
        }

        const age = prompt(`Ingrese edad #${i}`);

        if (age === null) {
            return;
        }

        if (age <= 0 || age > 99) {
            alert(`Edad <${name}> ingresada no es valida.`);
            continue;
        }

        if (age > maxAge) {
            maxAge = age;
            maxName = name;
        }

        console.log(`#${i++}. ${name} (${age})`);
    }

    alert(`Al que se le acabo la vida: ${maxName} (${maxAge})`);
});