import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { makeStyles, InputBase } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import List from '../List'
import { getBoardByIdInitiate } from '../../redux/actions/board'
import styled from 'styled-components'

const MainWrap = styled.div`
  background: #659999;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
`

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    overflowY: 'auto',
  },
  listContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    // marginTop: theme.spacing(0.5),
  },
  wrapper: {
    marginTop: theme.spacing(10.3),
  },
  editable: {
    marginLeft: theme.spacing(1),
    height: '38px',
    padding: theme.spacing(0, 1, 0, 1),
    boxShadow: 'inset 0 0 0 2px #0079bf',
    borderRadius: 6,
    backgroundColor: '#EBECF0',
    width: '290px',
    position: 'fixed',
    marginTop: theme.spacing(4.5),
  },
}))

const Board = (props) => {
  const { match: { params: { id } } } = props
  const boardState = useSelector(state => state.boardReducer)
  const dispatch = useDispatch()
  const classes = useStyles()

  const [initialData, setInitialData] = useState({})

  const {
    boardDetailsLoading,
    boardDetailsData
  } = boardState

  useEffect(() => {
    dispatch(getBoardByIdInitiate({ id }))
  }, [])

  useEffect(() => {
    if (boardDetailsData) {
      console.log('ssadasdasdasdas')
      let prevState = { tasks: {}, columns: {}, columnOrder: [] }

      const { lists } = boardDetailsData
      const arrCol = []
      const columnOrder = lists.map((list) => {
        arrCol.push(list._id)
      })
      const columnDict = lists.reduce((memo, list) => {
        memo[list._id] = list
        return memo
      }, {})

      let cardsArray = []
      const taskMemo = lists.length > 0 && lists.map((l) => {
        cardsArray = [...cardsArray, ...l.cards]
      })
      console.log(cardsArray)
      const cardDict = cardsArray.reduce((memo, card) => {
        memo[card._id] = card
        return memo
      }, {})

      prevState.columnOrder = arrCol
      prevState.columns = columnDict
      prevState.tasks = cardDict

      setInitialData(prevState)
    }
  }, [boardDetailsData])

  console.log(initialData)
  return (
    <MainWrap>
      {boardDetailsData && <DragDropContext>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="list"
        >
          {(provided) => (
            <div
              className={classes.listContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {console.log('sdadwada', initialData)}
              {
                Object.keys(initialData).length > 0 && initialData.columnOrder.map((columnId, index) => {
                  const column = initialData.columns[columnId]
                  const tasks = column.cards.map(
                    (card) => initialData.tasks[card._id]
                  )
                  return (
                    // <div> ooo</div>
                    <List
                      key={column._id}
                      column={column}
                      tasks={tasks}
                      index={index}
                    />
                  )
                })
              }

            </div>
          )}
        </Droppable>
      </DragDropContext>}
    </MainWrap>
  )
}

export default Board