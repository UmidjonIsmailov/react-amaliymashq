import {Modal, ModalFooter, ModalBody, ModalHeader, FormGroup} from "reactstrap";
import {AvForm,AvField} from 'availity-reactstrap-validation';

function  PageModal({save,toggle,isOpen,data,isOpenEdit,EditToggle,EditSave}) {
    return <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Add Users
            </ModalHeader>
            <ModalBody>
                <AvForm id={'user-add'} onValidSubmit={save}>
                    <AvField classNsme={'form-control'}   name="Firstname" label="FirstName" required />
                    <AvField classNsme={'form-control'}   name="Lastname" label="LastName" required />
                    <AvField classNsme={'form-control'}   name="username" label="username" type={'text'} required />

                    <FormGroup>

                    </FormGroup>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-success'} form={'user-add'}>save</button>
                <button className={'btn btn-danger'} onClick={toggle}>cancel</button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={isOpenEdit} toggle={EditToggle}>
            <ModalHeader>
                You are in Edit
            </ModalHeader>
            <ModalBody>
                <AvForm id={'user-add'} onValidSubmit={EditSave}>
                    <AvField classNsme={'form-control'}  defaultValue={data.firstname} name="Firstname" label="FirstName" required />
                    <AvField classNsme={'form-control'}  defaultValue={data.lastname} name="Lastname" label="LastName" required />
                    <AvField classNsme={'form-control'}  defaultValue={data.username} name="username" label="username" type={'text'} required />

                    <FormGroup>

                    </FormGroup>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-success'} form={'user-add'}> Edit</button>
                <button className={'btn btn-danger'} onClick={EditToggle}>cancel</button>
            </ModalFooter>
        </Modal>
    </div>


}
export default PageModal