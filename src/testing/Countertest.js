import React from 'react' //For testing react compontents
import Counter from '../components/Counter' //The component to be tested
import { render } from '@testing-library/react' //To virtually render our component, so the test function can interact with the component
import '@testing-library/jest-dom/extend-expect'//...

//test receives two arguments, a description about the test, and a callback function
test('checks if header renders with the correct text', () => {
     const counter = render(<Counter />)
})