import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteCatAction } from "../../REDUX/CAT/slice";
import { hideModal } from "../../REDUX/Modal/slice";
import { deleteProductsAction } from "../../REDUX/PRODUCT/slice";
const TheModal = () => {
    const dispatch = useDispatch()
    const isModalVisible = useSelector(({ modalState: {isModalVisible} }) => isModalVisible)
    const type = useSelector(({ modalState: {type} }) => type)
    const id = useSelector(({ modalState: {id} }) => id)

    const handleSave = () => {
        dispatch(hideModal())
        type == "cat" ? dispatch(deleteCatAction(id)):dispatch(deleteProductsAction(id))
    };
    return (
        <>
            <Modal show={isModalVisible} onHide={() => dispatch(hideModal())}>
                <Modal.Body>
                    are you sure you want to delete this item
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(hideModal())}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TheModal;