const express = require ('express');
const app = express();

app.get('/' , (req: any,res: { send: (arg0: string) => void; }) => {
    res.send('hello world');

});

app.get('/api/courses',(req: any,res: { send: (arg0: number[]) => void; })=>{
    res.send([1,2,3]);
});
app.listen(3000,()=>console.log('Listening on port 3000...'));