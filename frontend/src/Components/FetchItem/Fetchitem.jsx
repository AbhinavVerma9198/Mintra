import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { itemsActions } from '../../store/itemslice'

const Fetchitem = () => {



  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items[0]));
      });
  }, [])
  return (
    <></>
  )
}

export default Fetchitem;