import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';


const JobModal = (props) => {

    const {
        open,
        onCloseModal,
    } = props
    
  return (
    <div>
        {
            open && 
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    animationDuration={500}
                    center={true}
                    // role='dialog'
                    blockScroll={false}
                    closeOnOverlayClick={true}
                    focusTrapped={true}

                >
                    <h1>Modal Header</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Modal>
        }
    </div>
  )
}

export default JobModal