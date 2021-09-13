import react from 'react'
import { render, getAllByTestId } from '@testing-library/react'
import HomeScreen from '../components/HomeScreen'
import { act } from 'react-dom/test-utils'

let container = null
beforeEach(async () => {
    container = render(<HomeScreen />).container
    await act(async () => { })
})

