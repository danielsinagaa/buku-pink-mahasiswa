import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddDosen = () => {
    return (
        <div className="card">
            <h3 style={{color: '#035B71'}}>TAMBAHKAN DOSEN BARU</h3>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Nama Dosen</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Nama Dosen" />
        
                    <Label for="exampleEmail">NIK</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="NIK" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default AddDosen
