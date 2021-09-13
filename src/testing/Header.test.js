import react from 'react'
import { render, getByTestId } from '@testing-library/react'
import Header from '../components/Header'

let container = null

beforeEach(() => {
    container = render(<Header />).container
})

//the first test
test('Should show logo', () => {

    expect(getByTestId(container, 'logo')).toBeTruthy()
})

test('Should show search', () => {

    expect(getByTestId(container, 'search')).toBeTruthy()
})

test('Should show menu', () => {

    expect(getByTestId(container, 'menu')).toBeTruthy()
})