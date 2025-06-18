import {useState,useEffect} from 'react';


const TestPage = ()=> {
    const [data,setData] =  useState([]);
    // pakai useEffect karena akan menjalankan fetch API ke dalam Open API
    useEffect(()=>{
        // gunakan konsep async await untuk menggantikan konsep promise
        async function fetchData() {
            // coba
            try {
                const request = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await request.json();
                // cek apakah response ada isi nya, menggunakan ternary pengkondisian
                response ? setData(response) : console.log('Error!');
            // tangkap error  jika block 'try' tidak berhasil
            } catch(err) {
                console.log('Error!');
                console.log(err);
            }

        }

        // jalankan fetchdata ketika komponen pertama kali di render dihalaman user
        fetchData();
    },[])

    return (
        <div style={{marginTop:'100px'}} className="test">
        <h2>Test</h2>
        <p>Hai, ini Adalah halaman untuk <i style={{color:'red'}}>Debugging!</i></p>

        <div className="container">
            {data.map((item)=>{
                return (
                    <div className="card" key={item.id}>
                        <b>ID : <i>{item.id}</i></b>
                        <b>Nama : <i>{item.title}</i></b>
                    </div>
                )
            })}
        </div>

        </div>

        
    )
}

export default TestPage;