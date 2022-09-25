import PageModal from "./Components/PageModal"
import {useState} from "react";

function App(){

    const checkStyle={
        transform: 'scale(1.5)'
    }
    
    const [table, setTable] = useState([
        {
            id:1, firstname:'Komolov', lastname:'Sardor', username: '@mdo', count:0, active:false
        },
        {
            id:2, firstname:'Latipov', lastname:'Bohodir', username: '@fat', count:0, active:false
        },
        {
            id:3, firstname:'Karimov', lastname:'Feruz', username: '@twitter', count:0, active:false
        },  
    ])


    const [modalVisible,setModal] = useState(false)
    const [EditmodalVisible,setEditModal] = useState(false)
    const [pop,setPop] = useState({
        id:'',
        firstname:'',
        lastname:'',
        username:'',
        count:0,
        active:false
    })
    const [data,setData] = useState('')
    const [search,setSearch] = useState('')
    const [activeSearch,setActive]=useState(false)

    function Search(event) {
       setSearch(event.target.value)
    }

    function ActiveSearch(event) {
        setActive(event.target.checked)
    }

    function ToggleModal() {

    setModal(prev=>!prev)
    }

    function EditToggleModal() {

        setEditModal(prev=>!prev)
    }

    function onSubmit(event) {
        const p = pop
       p.firstname=event.target[0].value
       p.lastname=event.target[1].value
       p.username=event.target[2].value
       p.id=table.length+1
       setPop({...p})
       const a = table
       a.push(pop)
       setTable([...a])
       setModal(false)
    }

    function Edit(edit) {
       setData(edit)
       setEditModal(prev=>!prev)
    }

    function EditSave(event) {
       let firstname=event.target[0].value
       let lastname=event.target[1].value
       let username=event.target[2].value
       table.map((item,index)=>{
           console.log(item)
           if(item.id===data.id){
               item.firstname=firstname
               item.lastname=lastname
               item.username=username
           }


       })
       setTable([...table])
       setEditModal(false)

    }

    function Plus(index) {
        table[index].count=table[index].count+1
       setTable([...table])

    }
    
    function Minus(index) {
        table[index].count=table[index].count-1
       setTable([...table])
    }

    function Actives(id) {
        table.map((item,index)=>{
            if(id===index){
                    item.active = !item.active
                setTable([...table])
            }
        })

    }

    function Deletes(index) {
        table.splice(index, 1)
        setTable([...table])

    }

    return(
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mt-4 d-flex">
                        <input onChange={Search} placeholder={'Search'} type="text" className={'form-control'}/>
                        <label className={'mx-3'} htmlFor={'lab'}>
                        <h4>ForAll</h4>
                        </label>
                        <input style={checkStyle} className={'mt-2'} id={'lab'} onChange={ActiveSearch} type="checkbox" checked={activeSearch} />
                    </div>

                    <div className="col-md-9 mt-4 d-flex justify-content-end">
                    <button className={'btn btn-dark mx-5'} onClick={ToggleModal}>Add</button>

                    <PageModal
                    data={data}
                    isOpen={modalVisible}
                    isOpenEdit={EditmodalVisible}
                    toggle={ToggleModal}
                    EditToggle={EditToggleModal}
                    save={onSubmit}
                    EditSave={EditSave}
                    />
                </div>

                    <div className="col-md-12 mt-4">
                        <table className={'table'}>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Name</th>
                                <th>Count</th>
                                <th>Active</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                            {
                                table.filter(value=>{
                                if(search === '' ){
                                return value;
                                } else if (
                                value.firstname.toLowerCase().includes(search.toLowerCase()) ||
                                value.lastname.toLowerCase().includes(search.toLowerCase()) ||
                                value.username.toLowerCase().includes(search.toLowerCase())
                            ){
                                return value;
                            }

                            }).map((item,index)=><tr key={index} className={'tr-bg'}>
                                <td>{index+1}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.username}</td>
                                <td><button className={'btn btn-success mx-1'} onClick={()=>Plus(index)}>+</button>
                                {item.count}
                                <button className={'btn btn-success mx-1'} onClick={()=>Minus(index)}>-</button></td>
                                <td><input style={checkStyle} type="checkbox" onChange={()=>Actives(index)} checked={item.active}/></td>
                                <td><button className={'btn btn-warning'} onClick={()=>Edit(item)}>Edit</button>
                                <button className={'btn btn-danger'} onClick={()=>Deletes(index)}>X</button></td>
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
            </div>
            
            <div className='row mt-5'>
                <div className='col-md-5' style={{marginLeft: '450px'}}>
                    <button className='btn btn-outline-primary' style={{width: '100px', borderRadius: '12px'}}>Previous</button>
                    <button className='btn btn-outline-primary ml-3' style={{width: '100px', borderRadius: '12px'}}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default App