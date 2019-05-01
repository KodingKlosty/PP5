// import react
import React from 'react'

// button component (Dummy)
const RButton = props => {
    return(
        <button style={styles.btn}>
        {props.btnTxt}
        </button>
    )
}

export default RButton

const styles = {
    btn:{
        display: 'inline-block',
        padding: '3px 3px',
        backgroundColor: '#008CBA',
        color: 'rgb(0, 0, 0)',
        margin: '1%',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '50px',
        width: '100px'
    }
}