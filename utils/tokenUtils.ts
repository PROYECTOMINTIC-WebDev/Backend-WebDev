import jwt from 'jsonwebtoken'

const validateToken = (token) => {
  if (token) {
    const verification = jwt.verify(token, 'secret', (err, data) => {
      /* console.log("errr",err ,"verificacion",data) */
      if (data) {
        return {
          data: data,
        };
      }
      if (err) {
        return {
          error: "contraseña incorrecta",
        };
      }
    });
    console.log(verification, token);
    return verification;
  }
};

const generateToken = (payload) => {
 /*  if (payload.iat) {
    delete payload.iat;
    delete payload.exp;
  } */
  return jwt.sign(payload,'secret', {
    expiresIn: '24h',
  });
};

export { validateToken, generateToken };