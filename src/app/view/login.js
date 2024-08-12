// Importación clase que general el html
import HTML from "../../../assets/CLASS/html.js";

// Importación de la configuración de la vista
import {configLogin} from "../../config/config.js";

// Importación de la funcion de Login
import FNLogin from "../../../assets/JS/FN-login.js";

// Creación la instancia de la clase HTML
const html = new HTML();

function login() {

    // Creación de la estructura del login
    html.etiqueta({
        etiqueta:"main",
        seleccion:"#root",
    });

    // Creacion Panel de Login
    html.etiqueta({
        etiqueta:"section",
        seleccion:"#root > main",
        clase:"login",
    });

    html.etiqueta({
        etiqueta:"section",
        seleccion:"section.login",
        clase:"panel-ingreso",
    });

    html.etiqueta({
        etiqueta:"article",
        seleccion:"section.panel-ingreso",
        clase:"titulo texto-blanco",
    });

    html.etiqueta({
        etiqueta:"label",
        seleccion:"article.titulo.texto-blanco",
        clase:"fuente-corben-bold",
        texto:configLogin.label1,
    });

    html.etiqueta({
        etiqueta:"label",
        seleccion:"article.titulo.texto-blanco",
        clase:"fuente-corben-reg",
        texto:configLogin.label2,
    });

    html.etiqueta({
        etiqueta:"article",
        seleccion:"section.panel-ingreso",
        clase:"img-usuario",
    });

    html.etiqueta({
        etiqueta:"picture",
        seleccion:"article.img-usuario",
    });

    html.etiqueta({
        etiqueta:"img",
        seleccion:"article.img-usuario > picture",
        src:`../../../assets/images/${configLogin.imgLogin}`,
        alt:"usuario",
    });

    html.etiqueta({
        etiqueta:"article",
        seleccion:"section.panel-ingreso",
        clase:"formulario",
    });

    html.etiqueta({
        etiqueta:"form",
        seleccion:"article.formulario",
        id:"form-login",
    });

    html.etiqueta({
        etiqueta:"fieldset",
        seleccion:"#form-login",
        clase:"field-user",
    });

    html.etiqueta({
        etiqueta:"input",
        seleccion:"fieldset.field-user",
        clase:"text-ph1 shadow-1",
        tipo:"email",
        name:"username",
        id:"username",
        placeholder:configLogin.textoEmail,
        requerido:true,
    });

    html.etiqueta({
        etiqueta:"fieldset",
        seleccion:"#form-login",
        clase:"field-password",
    });

    
    html.etiqueta({
        etiqueta:"div",
        seleccion:"fieldset.field-password",
        clase:"input-container",
    });

    html.etiqueta({
        etiqueta:"input",
        seleccion:"div.input-container",
        clase:"text-ph1 password-input shadow-1",
        tipo:"password",
        name:"password",
        id:"password",
        placeholder:configLogin.textoPasswor,
        requerido:true,
    });

    html.etiqueta({
        etiqueta:"span",
        seleccion:"fieldset.field-password .input-container",
        id:"togglePassword",
        clase:"toggle-password"
    });

    html.etiqueta({
        etiqueta:"i",
        seleccion:"#togglePassword",
        clase:"fas fa-eye-slash",
    });

    html.etiqueta({
        etiqueta:"fieldset",
        seleccion:"#form-login",
        clase:"btn",
    });

    html.etiqueta({
        etiqueta:"button",
        seleccion:"fieldset.btn",
        clase:"fuente-corben-bold texto-btn shadow-1",
        id:"aceptar",
        texto:configLogin.textoBoton,
    });

    // Creacion Panel de Biemvenida
    html.etiqueta({
        etiqueta:"section",
        seleccion:"section.login",
        clase:"panel-bienvenida",
    });

    html.etiqueta({
        etiqueta:"article",
        seleccion:"section.panel-bienvenida",
    });

    html.etiqueta({
        etiqueta:"h1",
        seleccion:"section.panel-bienvenida > article",
        clase:"fuente-corben-bold texto-blanco",
        texto:configLogin.label3,
    });

    html.etiqueta({
        etiqueta:"p",
        seleccion:"section.panel-bienvenida > article",
        clase:"fuente-corben-reg texto-blanco",
        texto:configLogin.textoBienvenida,
    });

    html.etiqueta({
        etiqueta:"article",
        seleccion:"section.panel-bienvenida",
        clase:"img-login",
    });

    html.etiqueta({
        etiqueta:"picture",
        seleccion:"section.panel-bienvenida > .img-login",
    });

    html.etiqueta({
        etiqueta:"img",
        seleccion:"article.img-login > picture",
        src:`../../../assets/images/${configLogin.imgLogin2}`,
        alt:"login",
    });

};

// Define the properties of the tag
export default function() {
    login();
    FNLogin();
};