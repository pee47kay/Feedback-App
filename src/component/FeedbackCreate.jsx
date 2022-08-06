import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Card from './shared/card'

function FeedbackCreate({ addFeedback }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(2);
    const message='Feedback Message should be more than four letters '

    const handleText = (e) => {
        e.preventDefault(setText(e.target.value))
        console.log(text)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 4) {
            const newFeedback = {
                rating,
                text,
            }
            addFeedback(newFeedback)
            
        }
        setText('')

        

    }

    return (
        <Card >
            {/* continue with css for create screen */}
            <form onSubmit={handleSubmit}>
                <div className='FeedbackCreate'>
                    <div>Create a new feedback from this form</div>
                    <h5>Rating:</h5>
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div >
                        <h6>Message:</h6>
                        <input onChange={handleText} type="text" placeholder='Feedback message' value={text} />
                        <button type="submit" >Send Feedback</button>
                    </div>
                    <h5 style={{color:'red'}}>{text.trim().length<4 ?`${message}`:null}</h5>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackCreate