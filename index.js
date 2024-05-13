const express= require("express");
const app=express();
const users=require("./MOCK_DATA.json");
const PORT=800;
// Route
app.get('/user',(req,res)=>{
        const html=`
        <ul>
            ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
        </ul>
        `
        res.send(html);

});

app.get('/API/user',(req,res)=>{
    return res.send(users);
});


app.get('/API/user/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id);
       return res.json(user);
});

app.post('/API/user',(req,res)=>{
return res.status('pENAAW');
});

app.patch('/API/user/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id);
       return res.json(user);
});

app.delete('/API/user/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id);
       return res.json(user);
});

// hello9 is njsdn

app.listen(PORT,()=> console.log(`Server Started`));

