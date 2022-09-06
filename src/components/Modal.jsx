import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { setModalTo } from "../features/modal/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();

    return(<aside className="modal-container">
        <div className="modal">
            <h4>Remove all items from your shopping cart?</h4>

            <div className="btn-container">
                <button type="button" className="btn confirm-btn" onClick={() => {
                    dispatch(setModalTo(false))
                    dispatch(clearCart())
                }}>Confirm</button>
                <button type="button" className="btn clear-btn" onClick={() => dispatch(setModalTo(false))}>Cancel</button>
            </div>
        </div>
    </aside>)
}

export default Modal;