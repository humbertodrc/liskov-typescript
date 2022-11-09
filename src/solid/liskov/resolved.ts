import FakeApi from "./fakeApi";

export interface IUsuario {
	nombre: string;
	apellido: string;
	email: string;
}

class Usuario {
	nombre: IUsuario["nombre"];
	apellido: IUsuario["apellido"];
	email: IUsuario["email"];
	API: FakeApi;

	constructor(
		nombre: IUsuario["nombre"],
		apellido: IUsuario["apellido"],
		email: IUsuario["email"]
	) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.API = new FakeApi();
	}

	async login(contrasena: string) {
		try {
			const usuario = await this.API.login(this.email, contrasena);
			console.log(`Bienvenido ${usuario.nombre} ${usuario.apellido}`);
		} catch (error) {
			console.log(error);
		}
	}

	async cambiarContrasena(contrasena: string, nuevaContrasena: string) {
		try {
			await this.API.cambiarContrasena(this.email, contrasena, nuevaContrasena);
			console.log(`Contraseña cambiada con exito`);
		} catch (error) {
			console.log(error);
		}
	}

}

// Solucion

// Creamos una clase Administrador que hereda de Usuario y tiene métodos específicos para los administradores.
// En este caso, el administrador podrá cambiar el email de cualquier usuario.
class UsuarioAdministrador extends Usuario {
	async cambiarEmail(email: string, nuevoEmail: string) {
		try {
			await this.API.cambiarEmail(email, nuevoEmail);
			console.log(`Email cambiado con exito`);
		} catch (error) {
			console.log(error);
		}
	}
}

const usuarioAdministrador = new UsuarioAdministrador("Humberto", "Rivero", "humberto@gmail.com")

const usuarioNormal = new Usuario("celeste", "Bogetti", "celeste@gmail.com")


usuarioAdministrador.cambiarEmail("humberto@gmail.com", "humbertoR@gmail.com")


