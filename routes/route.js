const users = [
  { id: 1, name: "유저1" },
  { id: 2, name: "유저2" },
  { id: 3, name: "유저3" }
 ];

exports.data=function(req, res){
  res.json({ok: true, users: users});
}