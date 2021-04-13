import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddMahasiswa = () => {
    return (
        <div className="card">
            <h3 style={{color: '#035B71'}}>TAMBAHKAN MAHASISWA BARU</h3>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Nama Mahasiswa</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Nama Mahasiswa" />
        
                    <Label for="exampleEmail">Nomor Induk Mahasiswa</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="NIM" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default AddMahasiswa
