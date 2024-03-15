import React, {useState} from 'react'

const Input = (props) => {
      const [email,  setEmail] = useState('');
      const [validation,  setValidation] = useState(false);
      const { className, placeHolder, value} = props;
    


    function formValidationSubmit(e) {
        e.preventDefault()
        if (!email.includes('@')) {
            setValidation('Please enter a valid email Adress')
            return;
        } 
        setEmail('')
        setValidation('')
            
    }

  return (
    <>
    <form className='flex' onSubmit={formValidationSubmit}>
    <input value={email} className={className} placeholder={placeHolder} type="text" onChange={(e) => setEmail(e.target.value)} />
    <span className='absolute translate-y-[48px] translate-x-[30px] text-[10px] text-red-600'>{validation}</span>
    </form>
    </>
  )
}

export default Input