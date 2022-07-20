export const userColumn=[

    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName:'userName',
        width: 230,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:'email',
        headerName:'Email',
        width: 230,
        
    },
    {
        field:'age',
        headerName:'Age',
        width: 110,
        
    },
    {
        field:'status',
        headerName:'Status',
        width: 170,
        renderCell :(params)=>{
            return(
                
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
        
    }
];


export const userRow=[
    {
     id:1,
     username:"Snow7",
     img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
     status:"active",
     email:"1snow@gmail.com",
     age:35,
    },
    {
        id:2,
        username:"Snow2",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"passive",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:3,
        username:"Snow5",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:4,
        username:"Snow4",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"pending",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:5,
        username:"Snow7",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"passive",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:6,
        username:"Snow6",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:7,
        username:"Snow1",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"pending",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:8,
        username:"Snow0",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"pending",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:9,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:10,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:11,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:12,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:13,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:14,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:15,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:16,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
       {
        id:17,
        username:"Snow",
        img:"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1657529332~exp=1657529932~hmac=a5a7d3181cd673e1f9edc494edb893f44853579e54053f7b6e41e5d96f78638b&w=740",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
       },
]