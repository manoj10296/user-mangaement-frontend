import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../../common/Card'
import { createBoardInitiate, getAllBoardsInitiate } from '../../redux/actions/board'
import Modal from 'react-modal'
import { Form } from 'semantic-ui-react'
import ButtonComponent from '../../common/Button'
import LabelComponent from '../../common/Label'
import InputComponent from '../../common/Input'

const MainWrap = styled.div`
  height: 100%;
  width: 100%;
`
const MainDiv = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,162,253,1) 100%);
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

const FormComponent = styled.form`
  width: 30vw;
  padding: 20px;    
`

const ButtonContainter = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
`

const DashBoard = (props) => {

  const { match: { path } } = props
  const dispatch = useDispatch()
  const [modal, setOpenModal] = useState(false)
  const [boardTitle, updateBoardTitle] = useState('')
  const state = useSelector(state => state.boardReducer)
  const {
    userboardsLoading,
    userboardsData,
    createBoardLoading,
    createBoardData
  } = state

  React.useEffect(() => {
    dispatch(getAllBoardsInitiate())
    return () => {
      updateBoardTitle('')
    }
  }, [])

  React.useEffect(() => {
    if (createBoardData) {
      setOpenModal(false)
      updateBoardTitle('')
    }
  }, [createBoardData])

  return (
    <MainWrap>
      <MainDiv>
        {userboardsData && userboardsData.map((board, index) => (
          <Card
            key={index}
            title={board.title}
            onClick={() => props.history.push(`${path}/board/${board._id}`)}
          />
        ))}
        <Card
          title="Add new board"
          onClick={() => setOpenModal(true)}
        />
        <Modal
          isOpen={modal}
          onRequestClose={() => {
            setOpenModal(false)
            updateBoardTitle('')
          }}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <h2>Create Board</h2>
          <FormComponent className="ui form">
            <Form.Field>
              <LabelComponent
                text="Board Name"
              />
              <InputComponent
                type="text"
                onChange={(e) => {
                  const { value } = e.target
                  updateBoardTitle(value)
                }
                } />
            </Form.Field>
            <ButtonContainter>
              <ButtonComponent
                width="100px"
                color="#24a0ed"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(createBoardInitiate({ title: boardTitle }))
                }
                }
              >
                Create{createBoardLoading && <i className="fa fa-spinner fa-spin"></i>}
              </ButtonComponent>
              <span style={{ marginLeft: '10px' }} />
              <ButtonComponent
                width="100px"
                color="#f44336"
                onClick={() => setOpenModal(false)
                }
              >
                Close
              </ButtonComponent>
            </ButtonContainter>
          </FormComponent>
          {console.log(boardTitle)}
        </Modal>
      </MainDiv>
    </MainWrap>
  )
}

export default DashBoard