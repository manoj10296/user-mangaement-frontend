import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

const styles = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)'
}
const ModalWrap = styled.div`
 /* top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%); */
`

const ModalComponent = (props) => {
  const {
    isOpen,
    setOpenModal,
    customStyles,
    children
  } = props
  return (
    // <ModalWrap>
    <Modal
      isOpen={isOpen}
      onRequestClose={setOpenModal}
      // style={customStyles}
      style={styles}
      cus
      // ariaHideApp={false}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
    // </ModalWrap>
  )

}

export default ModalComponent