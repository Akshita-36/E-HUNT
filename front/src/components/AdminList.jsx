import {useState,useEffect} from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position : relative;
    top : 40px;
    font-weight : bold;
    display : flex;
    flex-direction : column;
    align-items: center;
    margin: 5px;
    
`;

const Table = styled.table`
    border-collapse : collapse;
    margin-bottom : 5px;
    text-align: center;
`;

const Thead = styled.thead`
    background-color: black;
    color: white;
`;

const Th = styled.th`
    padding : 5px;
    text-align: left;
`;

const Tbody = styled.tbody`
    
`;

const Tr = styled.tr`
    border-bottom: 1px solid black;

`;

const Td = styled.td`
padding : 5px;
text-align: left;
`;

function AdminList() {
 
    const [userdata,setUserData] = useState([]);

    useEffect(() => {
        fetchData();
        
    }, [])

    const fetchData=()=>{
        fetch('http://localhost:5000/auth/admin')
        .then(result=> result.json() )
        .then(list=>{
                setUserData(list);
            }).catch(err=>{
                console.log(err);
            });
    }

    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                    <Th>UserName</Th>
                    <Th>Email</Th>
                    <Th>Level</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userdata.map(d=>(
                        <Tr kep={d._id}>
                           <Td>{d.username}</Td>
                           <Td>{d.email}</Td>
                           <Td>{d.level}</Td>
                        </Tr>

                    ))}
                    
                </Tbody>
            </Table>
        </Container>
    )
}

export default AdminList
