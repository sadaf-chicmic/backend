function auth(req,res,next){
    const token=req.headers.authorization;
    
    if(!token || token!="sadaf"){
        return res.status(401).json({
            success:false,
            message:"Unauthorized",
        })
    }
    next();
}

module.exports = auth;
