//This is a dynamic footer 

import React from 'react'
import { FaApple } from 'react-icons/fa'
import JKWDLogo from '../../imgs/JKWDLogo.png'
import { Paper } from '@material-ui/core';

const Footer = () => 
{
    return(
        <Paper>
            <footer style={styles.footer}>
                Build on an  <FaApple /> | By: <img src={JKWDLogo} alt='James Klostermeyer Web Designs' style={styles.lilLogo}/> Web Designs
                |  © 2019 All Rights Reserved.
            </footer>
        </Paper>
    )
}

export default Footer

const styles = {
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },

    lilLogo: {
        height: '30px',
        weight: '30px',
        padding: '5px'
    }
}

