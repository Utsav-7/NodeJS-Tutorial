const authorize = (req,res,next)=>{
    const {user}=req.query;
    if(user === 'utsav'){
        req.user={name:'utsav', id:1}
        next()
    }else { 
        res.status(401).send('Unauthorized')
    }

}
module.exports=authorize