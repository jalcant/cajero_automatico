// Arreglo de cuentas con sus nombres y saldos//
var cuentas = [
    { nombre: "Mali", password: "123456", saldo: 200 },
    { nombre: "Gera", password: "clave2", saldo: 290 },
    { nombre: "Maui", password: "clave3", saldo: 67 }
  ];
  
  var saldoActual = 0;
  var cuentaSeleccionada = -1;
  
  function login() {
    var cuentaIndex = parseInt(document.getElementById("cuentasDropdown").value);
    var password = document.getElementById("password").value;
  
    if (cuentaIndex >= 0 && cuentaIndex < cuentas.length) {
      var cuenta = cuentas[cuentaIndex];
  
      if (password === cuenta.password) {
        cuentaSeleccionada = cuentaIndex;
        saldoActual = cuenta.saldo;
        document.getElementById("login").style.display = "none";
        document.getElementById("operaciones").style.display = "block";
      } else {
        document.getElementById("loginError").textContent = "Password incorrecto";
      }
    }
  }
  
  function consultarSaldo() {
    document.getElementById("operacionResult").textContent = "Saldo actual: $" + saldoActual;
  }
  
  function ingresarMonto() {
    var monto = parseInt(document.getElementById("montoIngresar").value);
    
    if (monto >= 10 && monto <= 990) {
      if (saldoActual + monto <= 990) {
        saldoActual += monto;
        document.getElementById("operacionResult").textContent = "Monto ingresado: $" + monto + ". Nuevo saldo: $" + saldoActual;
      } else {
        document.getElementById("operacionResult").textContent = "El monto ingresado supera el límite permitido.";
      }
    } else {
      document.getElementById("operacionResult").textContent = "El monto ingresado debe estar entre $10 y $990.";
    }
  }
  
  function retirarMonto() {
    var monto = parseInt(document.getElementById("montoRetirar").value);
    
    if (monto >= 10 && monto <= 990) {
      if (saldoActual - monto >= 10) {
        saldoActual -= monto;
        document.getElementById("operacionResult").textContent = "Monto retirado: $" + monto + ". Nuevo saldo: $" + saldoActual;
      } else {
        document.getElementById("operacionResult").textContent = "No puedes retirar ese monto debido al límite mínimo permitido.";
      }
    } else {
      document.getElementById("operacionResult").textContent = "El monto a retirar debe estar entre $10 y $990.";
    }
  }
  
  function logout() {
    saldoActual = 0;
    cuentaSeleccionada = -1;
    document.getElementById("login").style.display = "block";
    document.getElementById("operaciones").style.display = "none";
    document.getElementById("password").value = "";
    document.getElementById("loginError").textContent = "";
    document.getElementById("operacionResult").textContent = "";
  }  
