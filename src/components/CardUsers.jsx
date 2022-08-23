import React from 'react'
import axios from 'axios'


const CardUsers = ({user, getAllUsers, setUpdateInfo, handleOpenForm}) => {

    const deleteUser = () => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
        .then(res => {
            console.log(res.data)
            getAllUsers()
        })
        .catch(err => console.log(err))

    }

    const handleUpdateClick = () => {
        handleOpenForm()
        setUpdateInfo(user)
    }

  return (
    <article className='card'>
        <h2 className='card__title'>{user.name}</h2>
        <hr className='card__hr'/>
        <ul className='card__list'>
            <li className='card__item'>First Name<span className='card__span'>{user.first_name}</span></li>
            <li className='card__item'>Last Name<span className='card__span'>{user.last_name}</span></li>
            <li className='card__item'>Email<span className='card__span'>{user.email}</span></li>
            <li className='card__item'>Password<span className='card__span'>{user.password}</span></li>
            <li className='card__item'>birthday<span className='card__span'>{user["birthday"]}</span></li>
        </ul>
        <footer className='card__footer'>
            <button onClick={deleteUser} className='card__btn'><ion-icon name="trash-bin-outline"></ion-icon></button>
            <button onClick={handleUpdateClick}className='card__btn'><ion-icon name="pencil-outline"></ion-icon></button>
        </footer>
    </article>
  )
}

export default CardUsers;