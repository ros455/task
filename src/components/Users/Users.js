import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getAllUsers } from '../../store/user'
import { getAlbums, getAllAlbums } from '../../store/albums';
import { userPost, getUserId } from '../../store/posts';
import { Link } from 'react-router-dom';
import './users.scss'
const Users = () => {

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true)

    dispatch(userPost(id))
  }

  const handleId = (id) => {
    dispatch(userPost(id))
  }

  const currentUserId = useSelector(getUserId);

  const allUser = useSelector(getUser);

  const allAlbums = useSelector(getAlbums);

  React.useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllAlbums())
  }, [])

  return (
    <div>
      {allUser.map((el) => (
        <div key={el.id}>

          <div className='user_block'>
            <h3>{el.name}</h3>

            <Link to="posts">
              <Button variant='primary' onClick={() => handleId(el.id)}>Пости</Button>
            </Link>
            <Button variant='primary' onClick={() => handleShow(el.id)}>Альбоми</Button>
          </div>

          <>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
              </Modal.Header>
              {allAlbums.map((item) => (
                <div key={item.id}>
                  {item.userId == currentUserId
                    ?
                    <>
                      <Modal.Body>
                        {item.title}
                      </Modal.Body>
                    </>
                    :
                    <>
                    </>}
                </div>
              ))}
            </Modal>
          </>
        </div>
      ))}
    </div>
  );
};

export default Users;