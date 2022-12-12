export default function validateInfo(values) {
    let errors = {};

    //must have input in full name input box
    if(!values.fullname.trim()) {
        errors.fullname = 'Your Name is Required'
    }

    if(!values.email) {
        errors.email = 'Email is Required'
    }

    if(!values.password) {
        errors.password = 'Password is Required'
    }

    if(!values.occupation) {
        errors.occupation = 'Please Select Your Occupation'
    }

    if(!values.state) {
        errors.state = 'Please Select Your State of Residence'
    }

    return errors
}