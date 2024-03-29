import React from 'react'

function Footer() {
    return (
        <div className= 'footer-container'>
        <section className='footer-subscription'>
            <p className= 'footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className= 'footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type ='email'  name='email'  placeholder='Your email'  className= 'footer-input'/>
                    <Button buttonStyle = 'btn--outline'> Subscribe </Button>
                </form>
            </div>
        </section>
    </div>
    )
}

export default Footer
