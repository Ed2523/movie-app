import react from 'react'
import { render, getByTestId } from '@testing-library/react'
import HomeScreen from '../components/HomeScreen'
import { act } from 'react-dom/test-utils'

let container = null
beforeEach(async () => {
    container = render(<HomeScreen />).container
    await act(async () => { })
})

test('Should show In Theather', () => {

    expect(getByTestId(container, 'In Theather')).toBeTruthy()
})
test('Should show Horror', () => {

    expect(getByTestId(container, 'Horror')).toBeTruthy()
})
test('Should show Comedy', () => {

    expect(getByTestId(container, 'Comedy')).toBeTruthy()
})
test('Should show Drama', () => {

    expect(getByTestId(container, 'Drama')).toBeTruthy()
})



