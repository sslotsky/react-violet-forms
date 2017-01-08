import React from 'react'
import { reduxForm, Field, Fields } from 'redux-form'
import { FormInput, CheckboxGroup, RadioGroup, Select, Save } from 'react-violet-forms'

const item = (value, text) => ({ value, text })

const colors = [
  item('blue', 'Blue'),
  item('red', 'Red')
]

const drinks = [
  item('whiskey', 'Whiskey'),
  item('beer', 'Beer')
]

export function Form(props) {
  const renderInterests = ({ likesMusic, likesChess, likesCoding }) => {
    const addLabel = (field, label) => ({ ...field, label })
    const fields = [
      addLabel(likesMusic, 'music?'),
      addLabel(likesChess, 'chess?'),
      addLabel(likesCoding, 'coding?')
    ]

    const values = [likesMusic.input.value, likesChess.input.value, likesCoding.input.value]
    const tooManyInterests = values.filter(v => v).length > 2
    const error = tooManyInterests && 'Please select no more than 2 interests'

    return (
      <CheckboxGroup fields={fields} error={error} />
    )
  }
 
  return (
    <div className="soft-half outset">
      <form onSubmit={props.handleSubmit}>
        <Field
          name="color"
          component={RadioGroup}
          options={colors}
          label="Favorite Color"
        />
        <Field
          name="drink"
          component={Select}
          options={drinks}
          label="Favorite Drink"
          prompt="Choose your poison!"
        />
        <label>Are you into:</label>
        <Fields
          names={['likesMusic', 'likesChess', 'likesCoding']}
          component={renderInterests}
        />
        <Save {...props} />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'hodgePodge'
})(Form)


