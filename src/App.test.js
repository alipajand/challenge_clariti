import {render, screen} from '@testing-library/react'
import App from './App'
import FileReader from './components/FileReader'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/Code Challenge/)
  expect(linkElement).toBeInTheDocument()
})

test('renders header class name', () => {
  render(<App />)
  const linkElement = screen.getByText(/Code Challenge/)
  expect(linkElement).toHaveClass('app-logo-text')
})

test('renders logo', () => {
  render(<App />)
  const linkElement = screen.getByAltText(/logo/)
  expect(linkElement).toBeInTheDocument()
})

test('renders logo class name', () => {
  render(<App />)
  const linkElement = screen.getByAltText(/logo/)
  expect(linkElement).toHaveClass('app-logo')
})

test('renders select a csv file to start', () => {
  render(<FileReader />)
  const linkElement = screen.getByText(/Select a CSV file to start/i)
  expect(linkElement).toBeInTheDocument()
})
