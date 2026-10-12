import express from 'express';

const app = express();
const PORT = 3000;

// middleware
app.use(express.json())

// Get methode
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
    res.send('<h1>Subhasish</h1>');
});

app.get('/json', (req, res) => {
    res.json({
        name:"subhaish",
        branch:"csaiml"
    });
});

// post methode
app.post('/',(req,res)=>{
    let body = req.body
    console.log(body)
    res.send("this is post method")
})

// req.params
// user data
let users =[
    
[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "age": 25,
    "department": "Engineering",
    "salary": 45000
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "age": 28,
    "department": "Human Resources",
    "salary": 40000
  },
  {
    "id": 3,
    "name": "Amit Kumar",
    "age": 30,
    "department": "Finance",
    "salary": 55000
  },
  {
    "id": 4,
    "name": "Sneha Singh",
    "age": 26,
    "department": "Marketing",
    "salary": 42000
  },
  {
    "id": 5,
    "name": "Vikash Das",
    "age": 32,
    "department": "Sales",
    "salary": 50000
  }
]

]
app.get("/user",(req,res)=>{
    res.json(users)
})
// use req.params
app.get("/user/:id",(req,res)=>{
    let id = req.params.id
    let existingUser = users.find((user)=>(user.id==id))
    console.log(id);
    res.json(existingUser)
})

// req.query
app.get('/search',(req,res)=>{
    let query = console.log(req.query)
    res.json(query)
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});