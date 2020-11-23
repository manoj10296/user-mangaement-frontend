import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Paper, makeStyles, InputBase, IconButton } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    width: '230px',
    wordWrap: 'break-word',
    zIndex: '-100',
    '&:hover': {
      backgroundColor: '#EBECF0',
    },
  },
  delete: {
    position: 'absolute',
    right: 0,
    zIndex: 1000,
    top: 0,
    backgroundColor: '#EBECF0',
  },
}))

export default function Card({ task, index }) {
  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState(task.name)
  const [card, setCard] = useState(true)
  const [showDelete, setShowDelete] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {card && (
            <Paper
              className={classes.card}
              onMouseEnter={() => setShowDelete(true)}
              onMouseLeave={() => setShowDelete(false)}
              onClick={() => {
                setEditable(true)
              }}
            >
              {editable ? (
                <InputBase
                  onChange={(e) => {
                    e.preventDefault()
                    setTitle(e.target.value)
                  }}
                  multiline
                  fullWidth
                  value={title}
                  style={{ minHeight: '7px' }}
                  autoFocus
                  onFocus={(e) => {
                    const val = e.target.value
                    e.target.value = ''
                    e.target.value = val
                  }}
                  onBlur={() => {
                    setEditable(false)
                    const text = title.trim().replace(/\s+/g, ' ')
                    if (text === '') {
                      setTitle(task.name)
                      return
                    }
                    setTitle(text)
                    // dispatch(updateCardById(task._id, { name: text }))
                    // eslint-disable-next-line no-param-reassign
                    task.name = text
                  }}
                />
              ) : (
                  <div style={{ position: 'relative' }}>
                    <div>{task.title}</div>
                    {showDelete && (
                      <IconButton
                        className={classes.delete}
                        size="small"
                      >
                      </IconButton>
                    )}
                  </div>
                )}
            </Paper>
          )}
        </div>
      )
      }
    </Draggable >
  )
}
