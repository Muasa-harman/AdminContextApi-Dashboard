export const userColumns = [{field:"id",headerName:"ID",width:70},
{
    field:"user",headerName:"User",width: 230, renderCell:(params)=>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.rows.img} alt=''/>
                {params.row.username}
            </div>
        )
    }
}
];

export const userRows = [
    { id: 1, 
        username: 'Snow',
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
        status: 'Active', 
        email: "1snow@gmail.com",
        age:35 },
    { id: 2, 
        username: 'Jamie Lannister', 
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 1, 
        username: 'Snow', 
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 3, 
        username: 'Snow',
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:4 },
    { id: 4, 
        username: 'Snow',
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 5, 
        username: 'Snow', 
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 6, 
        username: 'Snow', 
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 7, 
        username: 'Snow',
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
    { id: 8, 
        username: 'Snow',
        img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", 
        status: 'Jon', 
        email: "1snow@gmail.com",
        age:35  },
  ];
  