import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
    // console.log(req.body);
    // const { nombre, email, password } = req.body
    // console.log(nombre);
    // console.log(email);
    // console.log(password);
    try {
        // Guardar un nuevo veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json(veterinarioGuardado)
    } catch (error) {
        console.log(error);
    }

};

const perfil = (req, res) => {
    res.json( {msg: "Mostrando perfil" })
};

export { registrar, perfil }