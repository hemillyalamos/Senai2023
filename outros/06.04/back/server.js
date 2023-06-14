app.post('/pacientes', (req, res) => {
    // adicionar o novo paciente 
    const novoPaciente = req.body;
    pacientes.push(novoPaciente);
    // envia a resposta com o paciente cadastrado
    res.json(novoPaciente);
});