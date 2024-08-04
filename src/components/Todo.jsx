import { useState } from "react"
import { Card, InputGroup, Form, Button } from "react-bootstrap"
import { FaPenToSquare } from "react-icons/fa6"
import { MdDelete } from "react-icons/md"


const Todo = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(null)

    const onHandleChange = (event) => {
        setValue(event.target.value)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        if (edit !== null) {
            const newTodo = [...todos];
            newTodo[edit].value = value
            setTodos(newTodo)
            setEdit(null)
        } else {
            setTodos([...todos, { value, isCompeletd: false }])

        }
        setValue("")

        console.log(todos)
    }

    const onHandleDelete = (index) => {
        const newTodo = todos.filter((_, toIndex) => toIndex !== index)
        setTodos(newTodo)

    }
    const onHandleEdit = (index) => {
        setEdit(index)
        setValue(todos[index].value)

    }


    return (
        <div>

            <div className="text-center">
                <h1>Todo Application</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <Card>
                    <Card.Body>
                        <Form onSubmit={onHandleSubmit}>
                            <InputGroup size="">
                                <Form.Control
                                    name="task"
                                    placeholder="Add Task"
                                    value={value}
                                    onChange={onHandleChange}
                                    required
                                />
                                <Button type="submit">
                                    {
                                        edit !== null ? "Upadate" : "Add"
                                    }
                                </Button>
                            </InputGroup>
                        </Form>
                    </Card.Body>


                </Card>

            </div>
            <div className="d-flex justify-content-center" >
                {
                    <div >
                        <ul className='text-center' >
                            {todos.map((item, index) => (
                                <li key={index} className='list-group-item text-center mt-1 ' >
                                    <div className="d-flex  align-items-center">
                                        <p className='    fs-1 '>{item.value}</p>
                                        <div className=" justify-content-around ms-5  ">
                                            <FaPenToSquare className="fs-3" onClick={() => onHandleEdit(index)} />
                                        </div>
                                        <div className=" justify-content-around ms-3 fs-3" ><MdDelete onClick={() => onHandleDelete(index)} />
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>

                    </div>


                }

            </div>

        </div>
    )
}

export default Todo