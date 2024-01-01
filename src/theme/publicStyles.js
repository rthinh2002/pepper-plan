const centerElementStyle = {
    my: 16, 
    mx: 4, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
}

const MontserratHeaderStyle = {
    fontFamily: 'Montserrat', 
    fontSize: 40, 
    fontWeight: 'bold'
}

const MontserratBodyStyle = {
    fontFamily: 'Montserrat', 
    fontSize: 20
}

const socialIconContainer = {
    my: 2, 
    display: 'flex', 
    gap: 8
}

const socialIconStyle = {
    width: 40, 
    height: 40
}

const textFieldFormStyle = {
    borderRadius: 5,
    backgroundColor: '#EDF5F3',
    boxShadow: 3
}

const textFieldfocusStyle = {
    "& label.Mui-focused": {
      color: "#073138"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#073138"
      }
    }
}

const centeringStyle = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center', 
}

const buttonStyle = {
    ...MontserratBodyStyle, 
    mt: 2,
    mb: 2, 
    backgroundColor: '#073138', 
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
    boxShadow: 3,
    '&:hover': {
        backgroundColor: '#FF8841', 
        color: 'black',
        fontWeight: 'bold',
    } 
}

const whiteButtonStyle = {
    ...MontserratBodyStyle, 
    mt: 2,
    mb: 2, 
    backgroundColor: 'white', 
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 5,
    boxShadow: 3,
    '&:hover': {
        backgroundColor: '#FF8841', 
        color: 'black',
        fontWeight: 'bold',
    } 
}

const linkStyle = {
    mt: 1, 
    color: 'black', 
    fontWeight: 'bold', 
    '&::underline': {
        textDecoration: 'underline', 
        color: 'black', 
        textDecorationThickness: '10px', 
    },
}

export {
    centerElementStyle, 
    MontserratBodyStyle, 
    MontserratHeaderStyle, 
    socialIconContainer, 
    socialIconStyle,
    textFieldFormStyle ,
    textFieldfocusStyle,
    centeringStyle,
    buttonStyle,
    linkStyle,
    whiteButtonStyle
};