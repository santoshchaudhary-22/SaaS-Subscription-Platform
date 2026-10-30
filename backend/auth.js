const jwt=require('jsonwebtoken');
function auth(req,res,next){const h=req.headers.authorization||'';try{if(!h.startsWith('Bearer '))throw Error();req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);next()}catch{return res.status(401).json({error:'Please sign in again.'})}}
function admin(req,res,next){if(req.user.role!=='admin')return res.status(403).json({error:'Admin access required.'});next()}
module.exports={auth,admin};
