const Usuario = "coder"
const CLAVE = "coder"
let intentos = 0
let acceso = false

// BUCLE: repite hasta 3 intentos o hasta acertar

while (intentos < 3 && !acceso) {
    const ingreso = prompt(" Ingresar Usuario ")
    const clave = prompt(" Ingresá la clave: ")

    // CONDICIONAL dentro del bucle
        if (clave === CLAVE && ingreso === Usuario) {
    acceso = true
    console.log(" Acceso concedido ")
    alert("Bienvenido/a" + " " + Usuario + " " + "Acceso concedido")

    // Bucle para mostrar el menú de opciones mientras el usuario quiera continuar
    let continuar = true
    while (continuar) {
        let menu = parseInt(prompt("Seleccione una opcion: 1). ingrese uno para ver su cuenta, 2). ingrese dos para extraccion, 3). Ingrese tres para deposito"))
        switch (menu) {
            case 1:
                alert(" Su saldo es de $10000 ")
                console.log(" Su saldo es de $10000 ")
                break
            case 2:
                alert(" Limite de extraccion $5000 ")
                console.log(" Limite de extraccion $5000 ")
                break
            case 3:
                alert(" Limite de deposito $10000 ")
                console.log(" Limite de deposito $10000 ")
                break
            default:
                alert(" Opcion no valida, ingrese un numero del 1 al 3 ")
                console.log("Opcion no valida, ingrese un numero del 1 al 3")
        
        }
        let confirmacion = prompt(" Desea realizar otra operacion? (si/no) ").toLocaleLowerCase()
        if (confirmacion == "no") {
            continuar = false 
            alert("Gracias por utilizar nuestros servicios"+ " " + Usuario + " " + "Vuelva pronto")
            console.log("Gracias por utilizar nuestros servicios" + " " + Usuario + " " + "Vuelva pronto")
        }
    }

// Si el usuario no acierta la clave, se incrementa el contador de intentos y se informa al usuario

    } else {
    intentos++;
    console.log("Clave incorrecta. Intentos restantes: " + (3 - intentos))
    alert("Clave incorrecta. Intentos restantes: " + (3 - intentos))
    }
    }

    // Resultado final terminar el bucle y mostrar mensaje de cuenta bloqueada si se agotaron los intentos
    if (!acceso) {
    console.log("Cuenta bloqueada por demasiados intentos")
    alert("Cuenta bloqueada por demasiados intentos")
}

