export const  validateUserInput = (req, res, next)=> {
  const { email, password, repeatPassword } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Missing param: email" });
  }

  if (password !== repeatPassword) {
    throw new Error("Password and repeat password are not the same");
  }

  // Se todas as validações passarem, chama o próximo middleware ou a rota
  return next();
}
