export const trending = (req, res) => res.send("Home page videos");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
}; //{id : '121212'}
// express는 내가 고른 이름과 함께 값을 제공해줌
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
