import React from 'react'

export default function Alert(props) {
  const capital = (word) => {
    const lower = word.toLowerCase();  //covnerts all the characters of the word it gets to lower case
    return lower.charAt(0).toUpperCase() + lower.slice(1); //This will convert the very first letter of the lower cased word to uppercase
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show mt-2`} role="alert">
      <strong>{capital(props.alert.typ)}</strong>: {props.alert.msg}
    </div>
  )
}
