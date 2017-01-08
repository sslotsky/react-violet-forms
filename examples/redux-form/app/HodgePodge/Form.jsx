import React from 'react'
import { reduxForm, Field, Fields } from 'redux-form'
import { FormInput, CheckboxGroup, RadioGroup, Select, Save } from 'react-violet-forms'
import { validator } from 'validate-this'

const item = (value, text) => ({ value, text })

const colors = [
  item('blue', 'Blue'),
  item('red', 'Red')
]

const drinks = [
  item('whiskey', 'Whiskey'),
  item('beer', 'Beer')
]

function hasTimeForNewInterest(_, values) {
  const { likesMusic, likesChess, likesCoding } = values
  const interests = [likesMusic, likesChess, likesCoding]

  const tooManyInterests = interests.filter(i => i).length > 2

  if (tooManyInterests) {
    return 'Please select no more than 2 interests'
  }
}

export function Form(props) {
  const renderInterests = ({ likesMusic, likesChess, likesCoding }) => {
    const addLabel = (field, label) => ({ ...field, label })
    const fields = [
      addLabel(likesMusic, 'music?'),
      addLabel(likesChess, 'chess?'),
      addLabel(likesCoding, 'coding?')
    ]

    const values = {
      likesMusic: likesMusic.input.value,
      likesCoding: likesCoding.input.value,
      likesChess: likesChess.input.value
    }

    const error = hasTimeForNewInterest(undefined, values)

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

function validate(values) {
  return validator(values, v => {
    v.validate('likesMusic', 'likesCoding', 'likesChess').satisfies(hasTimeForNewInterest)
  })
}

export default reduxForm({
  form: 'hodgePodge',
  validate
})(Form)


