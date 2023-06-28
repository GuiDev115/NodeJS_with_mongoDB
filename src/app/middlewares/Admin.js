export default (req, res, next) => {
  if (!req.user.administrador) {
    return res
      .status(403)
      .send({ error: 'Acesso negado. Permissão de administrador requerida.' });
  }
  next();
};
